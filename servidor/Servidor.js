const Express = require('express');
const Cors = require('cors');
const BodyParser = require("body-parser")

export default function Servidor(){
    const app = Express();
    
    app.use(Cors());
    app.use(BodyParser.json());
    app.listen(3000)
}