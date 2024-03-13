import React from "react";
import { BarraNavegadora } from "./components/Barra Navegadora/Navegador";
import './app.css'
import { TarjetaDePresentacion } from "./components/Tarjeta de Presentacion/Presentacion";
import { BloqueDeContenido } from "./components/Bloque de Contenido/BloqueDeContenido";
import { useEffect , useState } from "react";

export function App () {

    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/Samulug/samu_page_V1/imgs`);
                const data = await response.json();
                setImageUrls(data.map(item => item.img));
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="app-back">

            <BarraNavegadora />  
            <section>
                <div className="contenedor-principal">
                    <TarjetaDePresentacion  />
                    <div className="contenedor-bloq">
                        {imageUrls.map((imageUrl, index) => (
                            <BloqueDeContenido key={index} imageUrl={imageUrl} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}