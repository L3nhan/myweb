import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const conversation = () => {
    return model.startChat({
        history: [],
    });
};

