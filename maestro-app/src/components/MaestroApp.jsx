import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import WelcomeComponent from "./WelcomeComponent";


export default function MaestroApp() {
    return (
        <div className="MaestroApp">
                <BrowserRouter>
                    {/*<HeaderComponent></HeaderComponent>*/}
                    <Routes>
                        <Route path='*' element={<WelcomeComponent></WelcomeComponent>}></Route>
                    </Routes>
                </BrowserRouter>
        </div>
    )
}