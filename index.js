import { router,ruta} from "./config.js"
import { usuarios } from "./bd.js"

router.get("/",(req,res)=>{
     res.render("index.hbs",{usuarios})
})
router.post("/usuario/:id",async(req,res)=>{
     let buscar_usuario = await usuarios.find(usuario => usuario.cedula === req.params.id) 
     res.send(buscar_usuario)
     //res.render("index.hbs",{usuarios})

})