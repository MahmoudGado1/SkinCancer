import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/Home/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AboutPage from "./pages/About/About";
import SkinCancerPage from "./pages/SkinCancer/SkinCancer";
import Header from "./components/Header/Header";
import DoctorsPage from "./pages/Doctors/Doctors";
const App = () => {



  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="skin-cancer" element={<SkinCancerPage/>}/>
          <Route path="/doctors" element={<DoctorsPage/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer position="top-center"/>
      </Router>
    </>
  );
}

export default App;
