import "../Bloque de Contenido/bloquedecontenido.css";

export function BloqueDeContenido({ imageUrl, title, text, redirec }) {
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
                  <span class="span-mother">
                    <span>V</span>
                    <span>i</span>
                    <span>s</span>
                    <span>i</span>
                    <span>t</span>
                    <span>a</span>
                    <span>r</span>
                  </span>
                  <span class="span-mother2">
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
          <div className="techs"></div>
        </div>
      </div>
    </>
  );
}
//Busque en mis repositorios de github:
//nombre , descrippcion, el link y ver como hacer una preview
