import '../Barra Navegadora/navegador.css'

export function BarraNavegadora () {
    return(
        <header className="b-nav-header">
             <h1 className='name'>Samuel Rodriguez</h1>
            <nav className="b_elements">
                <ul className="bot-nav-ul">
                    <li className="bot-nav-li">
                        <a href="https://drive.google.com/file/d/1b7167PfsdEIRzOkpR4bKSPe4ji-siSko/view" className='bot-nav-a'>
                            Curriculum
                        </a>
                    </li>
                </ul>
                <ul className='bot-nav-ul'>
                    <li className="bot-nav-li">
                        <a href="" className='bot-nav-a'>Reseña de Perfil</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}