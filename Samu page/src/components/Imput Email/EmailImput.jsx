import React from 'react';
import './email-imput.css';


export function EmailImput() {
    
    return (
        <div className="input__container input__container--variant">
            <div className="shadow__input shadow__input--variant"></div>
            <input type="text" name="text" className="input__search input__search--variant" placeholder="Search..."/>
                <button className="input__button__shadow input__button__shadow--variant">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="1.5em" width="13em">
                        <span d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fillRule="evenodd" fill="#FFF">Copiar</span>
                    </svg>
                </button>
      </div>
        );
}