const { router,ruta,path } = require("./config.js")
const { validar_usuario,registrar_usuario } = require("./Login/Login.js")
router.get("/",(req,res)=>{
    res.send()
})
router.get("/login",(req,res)=>{
    res.sendFile(path.join(ruta,"/login.html"))
})
router.post("/login",(req,res)=>{
   const { usuario, contra } = req.body
   validar_usuario(usuario,contra)
   res.send("ok")
})
router.post("/registro",(req,res)=>{
   const { usuario, contra } = req.body
   registrar_usuario(usuario,contra)
   res.send("ok")
})