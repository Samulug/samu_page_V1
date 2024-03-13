import React from "react";
import { BarraNavegadora } from "./components/Barra Navegadora/Navegador";
import './app.css'
import { TarjetaDePresentacion } from "./components/Tarjeta de Presentacion/Presentacion";
import { BloqueDeContenido } from "./components/Bloque de Contenido/BloqueDeContenido";
import { useEffect , useState } from "react";

export function App () {
    const [data, setData] = useState({ imgs: [], tittles: [], info: [] , direcciones: [], });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/Samulug/samu_page_V1/db`);
                const jsonData = await response.json();
                setData(jsonData);
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
                        {data.imgs.map((img, index) => (
                            <BloqueDeContenido 
                                key={index} 
                                imageUrl={img.img}
                                title={data.tittles[index].title}
                                text={data.info[index].text}
                                redirec={data.direcciones[index].url}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}