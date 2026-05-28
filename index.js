import { router,ruta} from "./config.js" // llamamos a los objetos router y ruta creados en config.js
import { usuarios } from "./bd.js" //llamamos al objeto usuarios que esta en bd.js y que simula los usuarios de una base de datos 

router.get("/",(req,res)=>{
     res.render("index.hbs",{usuarios})
})
router.get("/login",(req,res)=>{
     res.render("login.hbs")
})
router.post("/usuario/:id",async(req,res)=>{
     let buscar_usuario = await usuarios.find(usuario => usuario.cedula === req.params.id) 
     res.send(buscar_usuario)
     //res.render("index.hbs",{usuarios})

})