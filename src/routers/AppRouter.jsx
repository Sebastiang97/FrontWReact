import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Categorias } from '../components/Categorias';
import { DetallesEmpleos } from '../components/DetallesEmpleos';
import { Home } from '../components/Home';
import { ListasEmpleos } from '../components/ListasEmpleos';
import { Navbar } from '../components/Navbar';
import { PostularEmpleo } from '../components/PostularEmpleo';

export const AppRouter = () => {
    return (
        <div>
            
            <Navbar/>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/empleos" element={<ListasEmpleos />} />
                <Route path="/categorias" element={<Categorias />} />
                <Route path="/postulacion" element={<PostularEmpleo />} />
                <Route path="/empleos/:empleo" element={<DetallesEmpleos />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    )
}
