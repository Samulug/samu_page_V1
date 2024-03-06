import React from "react";
import { BarraNavegadora } from "./components/Barra Navegadora/Navegador";
import './app.css'
import { TarjetaDePresentacion } from "./components/Tarjeta de Presentacion/Presentacion";
import { ReactDOM } from "react";

export function App () {
    return (
        <div className="app-back">
        <BarraNavegadora />
        <TarjetaDePresentacion />
        </div>
    )
}