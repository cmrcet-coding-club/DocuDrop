import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { LoginPage, HomePage } from './pages';
import Home from './components/home';
import LoginPage from './components/LoginPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;