import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import LoginHubs from './pages/LoginHubs.jsx';
import SignUp from './pages/SignUp.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Feedback from './pages/Feedback.jsx';
import SubmitIdea from './pages/SubmitIdea.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-hubs" element={<LoginHubs />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/enviar-projeto" element={<SubmitIdea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
