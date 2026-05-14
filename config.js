const express = require("express") // LLamamos al modulo de express
const path =require("path")
const ruta = path.join(__dirname,"frontend")
const servidor = express() // le paso la configuracion del servidor a la variable servidor
servidor.listen(4000)//El puerto del servidor
servidor.use(express.static(ruta))//definimos las rutas estaticas
servidor.use(express.json())// configuramos el servidor para trabajar con json
const router = express.Router()
servidor.use(router)

module.exports={
    router,
    ruta,
    path
}