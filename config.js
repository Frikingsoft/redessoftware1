import express from "express" // LLamamos al modulo de express
import { fileURLToPath } from "url" // para obtener las rutas del archivo actual
import { dirname } from "path" // para obtener las rutas del directorio actual
import  hbs  from "hbs" // LLamamos al modulo de hbs para las plantillas 
const __filename = fileURLToPath(import.meta.url)// para obtener las rutas del archivo actual
const __dirname = dirname(__filename) // para obtener las rutas del directorio actual

const ruta = `${__dirname}/views` // ruta que voy a utilizar para los archivos estaticos
const servidor = express() // le paso la configuracion del servidor a la variable servidor
servidor.listen(4000)//El puerto del servidor
servidor.use(express.json())// configuramos el servidor para trabajar con json
servidor.use(express.static(ruta))//definimos las rutas estaticas
servidor.set("view engine","hbs")// utilizamos hbs como motor de plantillas para darle vitaminas al html
hbs.registerPartials(`${__dirname}/views/partials`) // registramos los parciales que se van a utilizar en mas de una pagina de la aplicacion
const router = express.Router() // creamos una variable de router para crear las rutas de la aplicacion
servidor.use(router)// le avisamos a express que use el router

export {
    router,
    ruta,
    servidor
}// exportamos los siguientes objetos