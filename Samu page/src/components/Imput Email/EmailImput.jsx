import React from 'react';
import './email-imput.css';


export function EmailImput() {
    
    return (
        <div class="input-group">
            <input type="email" class="input" id="Email" name="Email" placeholder="uiverse@verse.io" autocomplete="off"/>
            <input class="button--submit" value="Copiar" type="submit"/>
        </div>
    );
}