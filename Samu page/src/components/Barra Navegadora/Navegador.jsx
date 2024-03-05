import '../Barra Navegadora/navegador.css'

export function BarraNavegadora () {
    return(
        <header className="b-nav-header">
             <h1 className='name'>Samuel Rodriguez</h1>
            <nav className="b_elements">
                <ul className="bot-nav-ul">
                    <li className="bot-nav-li">
                        <a href="" className='bot-nav-a'>
                            "Mas sobre Mi"
                        </a>
                    </li>
                </ul>
                <ul className='bot-nav-ul'>
                    <li className="bot-nav-li">
                        <a href="" className='bot-nav-a'>"Algo mas"</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}