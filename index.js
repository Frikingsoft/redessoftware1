import { router,ruta} from "./config.js"
import { usuarios } from "./bd.js"

router.get("/",(req,res)=>{
     res.render("index.hbs",{usuarios})
})
