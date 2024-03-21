import React, { useContext } from 'react';
import TecnologiasContext from './tecologiasContext'; // Asegúrate de importar el contexto

export function ComponenteBloqueDeContenido ({tecnologias,  }) {

  const tec = useContext(TecnologiasContext);
  return (
    <div className="techs">
      {tecnologias.map((tecnologia) => (
        <div key={tecnologia.id}>
          {tecnologia.tec.map((item) => (
            <span key={item.icon} className="tech-icon">
              <i className={`fas ${item.icon}`} /> {item.name}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};