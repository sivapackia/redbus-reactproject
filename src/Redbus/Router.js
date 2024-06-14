import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Component from "./Component/Component";
import Banner from "./Banner/Banner";
import Booking from "./Booking/Booking";

const Router=()=>{
    return(
        <>
        <BrowserRouter  basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Component/>}></Route>
            <Route path="/Banner" element={<Banner/>}></Route>
            <Route path="/Booking" element={<Booking/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}


export default Router