import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";

import Catering from "./Catering";
import Chef from "./Chef";
import FunctionHall from "./FunctionHall";
import Makeup from "./Makeup";
import Photography from "./Photography";
import Birthday from "./Birthday";
import DJ from "./DJ";
import Stage from "./Stage";
import Mehendi from "./Mehendi";
import ProviderProfile from"./ProviderProfile";
import Booking from "./Booking";
import Login from "./Login";
import Register from "./Register";
function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
         <Route path="/provider/:service/:id" element={<ProviderProfile />} />
         <Route path="/booking" element={<Booking />} />
         <Route path="/catering" element={<Catering />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/hall" element={<FunctionHall />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/dj" element={<DJ />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/mehendi" element={<Mehendi />} />
         <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
         
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;