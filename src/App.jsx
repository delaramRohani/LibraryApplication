import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Component/Login page/Login";
// import Signup from "./Component/Signup page/Signup";
import Home from "./Component/Home";
import './index.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
