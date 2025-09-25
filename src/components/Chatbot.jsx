// 1. Import tài nguyên
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { conversation } from './configuration';

const Chatbot = () => {
    // 2. Khai báo thuộc tính
    const [chatSession, setChatSession] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    // 3. Khai báo useEffect 
    useEffect(() => {
        const initializeChat = async () => {
            const session = conversation();
            setChatSession(session);
        };
        initializeChat();
    }, []);

    // 4. Hàm gửi hội thoại
    const handleMessage = async () => {
        if (!input.trim() || !chatSession) return;

        const newMessages = [...messages, { role: 'user', text: input }];
        setMessages(newMessages);
        setInput('');

        try {
            const result = await chatSession.sendMessage(input);
            const responseText = result.response.text();
            setMessages([...newMessages, { role: 'model', text: responseText }]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages([...newMessages, { role: 'model', text: "Error: Could not get a response." }]);
        }
    };

    return (
        // 5. Giao diện chat
        <div className="chat-container">
            <header>
                <h2>Gemini Chatbot</h2>
            </header>
            {/* 5.1. Khu vực chứa lịch sử chat */}
            <div className="message-list">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                ))}
            </div>
            {/* 5.2. Khu vực nhập nội dung chat */}
            <div className="input-area">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleMessage()}
                    placeholder="Type your message..."
                />
                <button onClick={handleMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chatbot;