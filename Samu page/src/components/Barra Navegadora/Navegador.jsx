import '../Barra Navegadora/navegador.css'

export function BarraNavegadora () {
    return(
        <header className="b-nav-header">
             <h1 className='name'>Samuel Rodriguez</h1>
            <nav className="b_elements">
                <ul className="bot-nav-ul">
                    <a href="https://drive.google.com/file/d/1b7167PfsdEIRzOkpR4bKSPe4ji-siSko/view"
                     className='bot-nav-li'
                     target='_blank'
                     rel='noopener noreferrer'
                     >
                        <span className='bot-nav-span'>Curriculum</span>
                    </a>
                </ul>
                <ul className='bot-nav-ul'>
                    <a href="" className='bot-nav-li'>
                        <span className='bot-nav-span'>Reseña de Pagina</span>
                    </a>
                </ul>
            </nav>
        </header>
    )   
}