import './presentacion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5,faCss3Alt,faJs,faReact,faLinkedin } from '@fortawesome/free-brands-svg-icons';


export function TarjetaDePresentacion () {
    return(
       <section>
            <div className="card">
                <div className="container">
                        <div className="cardface front-face">
                            <img src="https://avatars.githubusercontent.com/u/102266130?v=4" alt="" className='card-img'/>                   
                        </div>
                    <div className="cardface back-face">
                        <div className='card-info'>
                               <h2 className="card-tittle">Un poco sobre Samu:</h2>
                                <p className="card-parraf">Programador Junior Web muy aparcionado por las tecnologias nuevas, facil adaptación, buen trabajo en equipo y con ganas de aprender cada dia mas.</p>
                                <p className="card-tec">Orientado en Tecnologias como:</p>
                                <div className='icons'>
                                    <i>
                                        <FontAwesomeIcon icon={faHtml5} />
                                    </i>
                                    <i>
                                        <FontAwesomeIcon icon={faCss3Alt} />
                                    </i>
                                    <i>
                                        <FontAwesomeIcon icon={faJs} />
                                    </i>  
                                    <i>
                                        <FontAwesomeIcon icon={faReact} />    
                                    </i>
                                </div>
                                <div className='icons'>
                                    <a  href='https://github.com/Samulug?tab=repositories'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                    <a  href="https://www.linkedin.com/in/samuelrodriguezparodi/">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}