import express from "express" // LLamamos al modulo de express
import { fileURLToPath } from "url" // para obtener las rutas del archivo actual
import { dirname } from "path" // para obtener las rutas del directorio actual
import  hbs  from "hbs"
const __filename = fileURLToPath(import.meta.url)// para obtener las rutas del archivo actual
const __dirname = dirname(__filename) // para obtener las rutas del directorio actual

const ruta = `${__dirname}/views`
const servidor = express() // le paso la configuracion del servidor a la variable servidor
servidor.listen(4000)//El puerto del servidor
servidor.use(express.json())// configuramos el servidor para trabajar con json
servidor.use(express.static(ruta))//definimos las rutas estaticas
servidor.set("view engine","hbs")
hbs.registerPartials(`${__dirname}/views/partials`)
const router = express.Router()
servidor.use(router)

export {
    router,
    ruta,
    servidor
}