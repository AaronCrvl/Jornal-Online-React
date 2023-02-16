import ApiNoticias from "../api/ApiNoticias";
import Noticia from "../Dados/Noticia";

export default function ControleGridNoticias() {
    const api = new ApiNoticias()                              
    
    function limparBlocoOriginal (){
        let Bloco = document.getElementsByClassName("BlocoDeNoticia")[0]         
        if(Bloco!== undefined)        
            Bloco.remove()        
    }    

    this.preencherNoticia = ()=> {         
        if(global.APYKEY !== ''){
            let dados = api.GetNoticiasPrincipais()                            
            if(dados !== undefined)
            {
                dados
                .then(
                    function(result) {
                        for(let i = 0; i < result.totalResults; i++) {  
                            let BlocoBase = document.getElementsByClassName("BlocoDeNoticia")[0]      

                            if(BlocoBase !== undefined && result.articles[i] !== undefined) {                                                
                                const bloco = document.importNode(BlocoBase, true)
                                bloco.accessKey = Math.random()
                                bloco.setAttribute("accesskey", bloco.accessKey)
                                bloco.querySelector("#btnExpandir").setAttribute("accesskey", bloco.accessKey)                            
                                bloco.querySelector("#Titulo").innerHTML = result.articles[i].title                                                                                                                        
                                bloco.querySelector("#Texto").innerHTML = result.articles[i].description                            
                                bloco.querySelector("#Autor").innerHTML = result.articles[i].author
                                bloco.querySelector("#Fonte").innerHTML = result.articles[i].source.name
                                bloco.querySelector("#Data").innerHTML = result.articles[i].publishedAt                                                        
                                bloco.querySelector("#Imagem").setAttribute("src", result.articles[i].urlToImage)
                                
                                let not = new Noticia()
                                not.titulo = result.articles[i].title                                                
                                not.texto = result.articles[i].content
                                not.autor = result.articles[i].author    
                                not.fonte = result.articles[i].source.name    
                                not.imagem = result.articles[i].urlToImage
                                not.dataPublicacao = result.articles[i].publishedAt 
                                not.url = result.articles[i].url                           
                                bloco.noticia = not                                                                                                                              

                                let Grid = document.querySelector("#GridNoticias")
                                Grid.insertAdjacentElement('beforeend', bloco)
                            }                                  
                        }                    
                        limparBlocoOriginal()                    
                })              
            }     
        }  
        else{
            this.preencherNoticia() 
        }         
    }        
}