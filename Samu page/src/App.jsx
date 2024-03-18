import React from "react";
import { BarraNavegadora } from "./components/Barra Navegadora/Navegador";
import "./app.css";
import { TarjetaDePresentacion } from "./components/Tarjeta de Presentacion/Presentacion";
import {EmailImput} from "./components/Imput Email/EmailImput"
import { BloqueDeContenido } from "./components/Bloque de Contenido/BloqueDeContenido";
import { useEffect, useState } from "react";

export function App() {
  const [data, setData] = useState({
    imgs: [],
    tittles: [],
    info: [],
    direcciones: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/Samulug/samu_page_V1/db`
        );
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
      <div className="img-fleshita">
        <img src="https://github.com/Samulug/samu_page_V1/blob/main/Samu%20page/src/assets/icons8-curly-arrow-50.png?raw=true" alt="fleshita" className="fleshita" />
      </div>
      <section>
        <div className="contenedor-principal">
          <TarjetaDePresentacion />
          <h1 className="title-port">PortFolio</h1>
          <div className="contenedor-bloq">
            {data.imgs.slice(0, 6).map((img, index) => (
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
        <EmailImput />
      </section>
      {data.imgs.length >= 3   && (
                <button className="next-port">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                    </svg>
                </button>
            )}
    </div>
  );
}
