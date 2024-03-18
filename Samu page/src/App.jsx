import React from "react";
import { BarraNavegadora } from "./components/Barra Navegadora/Navegador";
import "./app.css";
import { TarjetaDePresentacion } from "./components/Tarjeta de Presentacion/Presentacion";
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
      </section>
      {data.imgs.length > 6  && (
                <button className="next-port">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                    </svg>
                </button>
            )}
    </div>
  );
}
