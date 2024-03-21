import "../Bloque de Contenido/bloquedecontenido.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHtml5, faCss3Alt, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { ComponenteBloqueDeContenido } from  './Tecnologias/ComponenteTech';
import { TecnologiasContext } from  './Tecnologias/tecologiasContext.js';


export function BloqueDeContenido({ imageUrl, title, text, redirec, tecnologias }) {
 
  return (  
    <>
      <div className="bloque-back">
        <div className="bloque">
          <div className="container-bloq">
            <div className="bloque-interior">
              <img src={imageUrl} alt="Imagen de Pagina" className="img-bloq" />
              <h1 className="tittle-bloq">{title}</h1>
              <p className="parraf-bloq">{text}</p>
              <div className="container-a">
              <a className="a-boton-bloq" href={redirec}>
                <button className="boton-bloq">
                  <span className="span-mother">
                    <span>V</span>
                    <span>i</span>
                    <span>s</span>
                    <span>i</span>
                    <span>t</span>
                    <span>a</span>
                    <span>r</span>
                  </span>
                  <span className="span-mother2">
                    <span>V</span>
                    <span>i</span>
                    <span>s</span>
                    <span>i</span>
                    <span>t</span>
                    <span>a</span>
                    <span>r</span>
                  </span>
                </button>
              </a>
              </div>
            </div>
          </div>
          <TecnologiasContext>
            <ComponenteBloqueDeContenido tecnologias={tecnologias}/>
         </TecnologiasContext>
        </div>
      </div>
    </>
  );
}
