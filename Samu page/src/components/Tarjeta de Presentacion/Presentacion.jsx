import './presentacion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5,faCss3Alt,faJs,faReact,faLinkedin,faGit } from '@fortawesome/free-brands-svg-icons';


export function TarjetaDePresentacion () {
    return(
            <div className="card">
                <div className="container">
                        <div className="cardface front-face">
                            <img src="https://avatars.githubusercontent.com/u/102266130?v=4" alt="" className='card-img'/>                   
                        </div>
                    <div className="cardface back-face">
                        <div className='card-info'>
                               <h2 className="card-tittle">Un poco sobre Mi:</h2>
                                <p className="card-parraf">Soy Programador Web Junior muy activo, me adapto facil, tengo buena comunicación, se trabajar en equipo y me gusta aprender cada dia más.</p>
                                <p className="card-tec">Trabajo con Tecnologias como:</p>
                                <div className='icons'>
                                    <i>
                                        <FontAwesomeIcon icon={faHtml5} style={{color:'#f06529'}} />
                                    </i>
                                    <i>
                                        <FontAwesomeIcon icon={faCss3Alt} style={{color:'#6386d7'}} />
                                    </i>
                                    <i>
                                        <FontAwesomeIcon icon={faJs} style={{color:'#F0DB4F'}}/>
                                    </i>  
                                    <i>
                                        <FontAwesomeIcon icon={faReact} style={{color:'#61DBFB'}}/>    
                                    </i>
                                    <i>
                                        <FontAwesomeIcon icon={faGit} style={{color:'white'}} />
                                    </i>
                                </div>
                                <div className='icons'>
                                    <p className="icons-text">Y tambien tengo:</p>
                                    <a  href='https://github.com/Samulug?tab=repositories'>
                                        <FontAwesomeIcon icon={faGithub} style={{color:'#fff'}}/>
                                    </a>
                                    <a  href="https://www.linkedin.com/in/samuelrodriguezparodi/">
                                        <FontAwesomeIcon icon={faLinkedin} style={{color:'rgb(70 172 222)'}}/>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}