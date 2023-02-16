import ApiNoticias from "../api/ApiNoticias";
import Noticia from "../Dados/Noticia"

export default function ControleBlocoInformativo()
{
    const api = new ApiNoticias()

    this.preencherBlocoInformativo = (categoria)=> {            
        preencherNoticiasConformeCategoria(categoria)
    }

    function limparBlocos (){
        let Grid = document.querySelector("#GridNoticias")  
        let Blocos = Grid.getElementsByClassName("BlocoDeNoticia")       
        if(Blocos !== undefined && Blocos.length > 0)        
            for(let i = (Blocos.length - 1); i > 0; i--)            
                Blocos[i].remove()
                  
    }

    function limparBlocoOriginal (){
        let Bloco = document.getElementsByClassName("BlocoDeNoticia")[0]         
        if(Bloco!== undefined)        
            Bloco.remove()        
    }

    function preencherNoticiasConformeCategoria(categoria) {           
        let dados = api.GetNoticiasPorCategoria(categoria)    

        if(dados !== undefined)
        {
            limparBlocos()
            dados
            .then(
                function(result) {                                       
                    for(let i=0; i < result.totalResults; i++) {  
                        let BlocoBase = document.getElementsByClassName("BlocoDeNoticia")[0]   

                        if(BlocoBase !== undefined && result.articles[i] !== undefined){
                            const bloco = document.importNode(BlocoBase, true)                                                                                   
                            bloco.querySelector("#Titulo").innerHTML = result.articles[i].title                                                                                                
                            //bloco.querySelector("#Texto").innerHTML = result.articles[i].content
                            bloco.querySelector("#Texto").innerHTML = result.articles[i].description
                            bloco.querySelector("#Autor").innerHTML = result.articles[i].author
                            bloco.querySelector("#Fonte").innerHTML = result.articles[i].source.name
                            bloco.querySelector("#Data").innerHTML = result.articles[i].publishedAt
                            // bloco.querySelector("#BotaoNoticia").href = result.articles[i].url    
                            bloco.querySelector("#Imagem").href = result.articles[i].source.name
                            bloco.querySelector("#Imagem").setAttribute("src", result.articles[i].urlToImage)
                        
                            let not =  new Noticia()
                            not.titulo = result.articles[i].title                                                
                            not.texto = result.articles[i].content
                            not.autor = result.articles[i].author    
                            not.fonte = result.articles[i].source.name    
                            not.imagem = result.articles[i].source.name   
                            bloco.noticia = not                              
                            let Grid = document.querySelector("#GridNoticias")   
                            Grid.insertAdjacentElement('beforeend', bloco)   
                        }                                                                                                                                                                                                                                                    
                    }                                    
                    limparBlocoOriginal()                    
            })              
        }        
    }      
}