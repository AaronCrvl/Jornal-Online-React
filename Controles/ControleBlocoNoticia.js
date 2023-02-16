import ViewNoticia from '../Componentes/ViewNoticia'

export default function ControleBlocoNoticia(){    
    let view = ()=>{}
    
    this.ExibirNoticia = (noticia) =>{
        if(noticia !== undefined)
            view = new ViewNoticia(noticia)        
    }
}