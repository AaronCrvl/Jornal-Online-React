import Axios from 'axios';
import { Alert } from 'react-bootstrap';

export default function ApiNoticias () { 
    // A key desta api pode ser adquirida no link https://newsapi.org/   
    const apiKey = 'f2b66cc557b2481db797989471d84d10'    
    global.APIKEY = ''   
    const sources = {
        bbc: 'bbc-news',
        us: 'us',      
    }

    this.TestaChaveAPI = (chave) => {
        let path = 'https://newsapi.org/v2/everything?q=testingNEWSAPI&apiKey=' + chave   
        
        Axios
        .get(path)
        .then(response => {            
            response.status === 200 ? (global.APIKEY = chave) : alert('Chave da API Incorreta')                                                            
        })       
        
        if(global.APIKEY !== '')
            return true
        else
            return false    
    }

    this.GetNoticiasPrincipais = () => {    
        console.log(global.APIKEY)              
        let path = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=' + apiKey
        return Axios.get(path).then(response => response.data)                               
    }

    this.GetNoticiasPorCategoria = (categoria) => {                
        let path = 'https://newsapi.org/v2/top-headlines?country=br&category=' + categoria + '&apiKey=' + apiKey
        return Axios.get(path).then(response => response.data)             
    }

    this.GetNoticiasPorTextoCaixaPesquisa = (texto) => {                
        // A api ainda não suporta a pesquisa com filtro de país caso a busca seja geral.
        let path = 'https://newsapi.org/v2/everything?q=' + texto + '&apiKey=' + apiKey
        return Axios.get(path).then(response => response.data)             
    }
}
    