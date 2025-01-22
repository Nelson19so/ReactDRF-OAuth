import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/authentication/Login";
import Signup from "./Pages/authentication/Signup";
import Dasboard from "./Pages/e-commerce/_dashboard";
import Home from "./Pages/blog/Home";
import Productdetailspage from "./Pages/e-commerce/Productdetailspage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/dashboard/product/:id" element={<Productdetailspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
