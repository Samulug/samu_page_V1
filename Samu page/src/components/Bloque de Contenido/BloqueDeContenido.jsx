import '../Bloque de Contenido/bloquedecontenido.css'


export function BloqueDeContenido ({imageUrl, title, text, redirec}) {
    return(
        <>  
                <div className='bloque'>
                    <div className='container-bloq'>
                        <div className='bloque-interior'>
                            <img src={imageUrl} alt="Imagen de Pagina" className='img-bloq'/>
                            <h1 className='tittle-bloq'>{title}</h1>
                            <p className='parraf-bloq'>{text}</p>
                            <a href={redirec}>
                                <button className='boton-bloq'>Visitar Pagina</button>
                            </a>
                            <div className='bloque-back'></div>
                        </div>
                    </div>
                </div>
        </>
    )
}
//Busque en mis repositorios de github:
//nombre , descrippcion, el link y ver como hacer una preview