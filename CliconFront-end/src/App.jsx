import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/blog/home";
import Login from "./Pages/authentication/Login";
import Signup from "./Pages/authentication/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
