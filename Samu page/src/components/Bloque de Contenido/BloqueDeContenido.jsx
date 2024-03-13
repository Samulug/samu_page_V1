import '../Bloque de Contenido/bloquedecontenido.css'


export function BloqueDeContenido ({imageUrl}) {
    console.log(imageUrl)
    return(
        <>  
                <div className='bloque'>
                    <div className='container-bloq'>
                        <div className='bloque-interior'>
                            <img src={imageUrl} alt="Imagen de Pagina" className='img-bloq'/>
                            <h1 className='tittle-bloq'>Psd sdasd sdasd sdasd sdasd agnina de Organizacion Empresaenrial</h1>
                            <p className='parraf-bloq'>Pagina para orgasd sdsad sdasd asda sdasd asdasd sdasd sda sadsdasdnizar equipos y personal en nuestra empresa</p>
                            <button className='boton-bloq'>Visitar Pagina</button>
                        </div>
                    </div>
                </div>
        </>
    )
}
//Busque en mis repositorios de github:
//nombre , descrippcion, el link y ver como hacer una preview