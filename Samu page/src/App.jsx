import React from "react";
import { BarraNavegadora } from "./components/Barra Navegadora/Navegador";
import './app.css'
import { TarjetaDePresentacion } from "./components/Tarjeta de Presentacion/Presentacion";
import { BloqueDeContenido } from "./components/Bloque de Contenido/BloqueDeContenido";
import { useFetch  } from "./useFetch";

export function App () {
    const {img} = useFetch(`https://my-json-server.typicode.com/Samulug/samu_page_V1`)

    return (
        <div className="app-back">
            <BarraNavegadora />  
            <section>
                <div className="contenedor-principal">
                    <TarjetaDePresentacion  />
                    <div className="contenedor-bloq">
                        <BloqueDeContenido />
                        <BloqueDeContenido />
                        <BloqueDeContenido />
                        <BloqueDeContenido />
                        <BloqueDeContenido />
                        <BloqueDeContenido />
                    </div>
                </div>
            </section>
        </div>
    )
}