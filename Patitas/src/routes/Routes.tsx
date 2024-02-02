import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/Login";
import Register from "../pages/Register";
import CheckEmail from "../pages/CheckEmail";
import Checked from "../pages/Checked";
import Perfil from "../pages/Perfil";
import PerfilFoto from "../pages/PerfilFoto";

export default function Home(){
    return(
        <Router>
            <Routes>
                <Route element = {<Login/>} path="/"/>
                <Route element = {<Register/>} path="/Register"/>
                <Route element = {<CheckEmail/>} path="/CheckEmail"/>
                <Route element = {<Checked/>} path="/Checked"/>
                <Route element = {<Perfil/>} path="/Perfil"/>
                <Route element = {<PerfilFoto/>} path="/PerfilFoto"/>
            </Routes>
        </Router> 
    );

}