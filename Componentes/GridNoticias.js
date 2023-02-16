import React from 'react';
import BlocoDeNoticia from './BlocoDeNoticia';
import ControleGridNoticias from '../Controles/ControleGridNoticias'

export default function GridNoticias (){     
    const grid = new ControleGridNoticias();                       

    return (
        <div id="GridNoticias" style={{"overflowY": "scroll", "height": "800px", "textAlign": "-webkit-center"}}>
            <BlocoDeNoticia onload={grid.preencherNoticia()}/>                                                                            
        </div>
    );    
}