import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Chatbot from './components/Chatbot';
import Porfolio from './components/Porfolio';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <Layout/> }>
            <Route index element = { <Porfolio/> }/>
            <Route path='chat' element = { <Chatbot/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


