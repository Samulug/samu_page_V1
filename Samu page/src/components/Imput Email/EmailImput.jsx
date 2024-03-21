import React from 'react';
import { useState } from 'react';
import './email-imput.css';


export function EmailImput() {

    const emailValue = "SamuelRodriguez-dev@gmail.com"
    const [tooltipText, setTooltipText] = useState("Copiar en el Portapapeles?");


    function btnCopiar() {
        navigator.clipboard.writeText(emailValue);
        setTooltipText("Copiado!")
        setTimeout(() => {
            setTooltipText("Copiar en el Portapapeles?");
        }, 2000);
    }
    
    return (
        <div className="input-group">
            <h1 className='title-imput'>E-mail</h1>
            <input type="email" className="input" id="Email" name="Email" value={emailValue} readOnly/>
            <button className="button--submit" value="Copiar" type="submit" onClick={btnCopiar}>
                <span className="tooltip">{tooltipText}</span>
                Copiar
            </button>
        </div>
    );
}