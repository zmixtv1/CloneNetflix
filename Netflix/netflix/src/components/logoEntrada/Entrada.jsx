import React from "react";
import { memo } from "react";

const Entrada=()=> {

    function carregar() {
        document.getElementById("teste").style.display="none";
    }

    return (
        <div id="teste" className='entrando'>
            <img src="https://davidsonbranding.com.au/wp-content/uploads/netflix.gif" width={'100%'} onLoad={setTimeout(carregar, 3500)}/>
        </div>
        
    )
}

export default memo(Entrada)