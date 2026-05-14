const { usuarios } =require("./Usuarios.js")
const bcrypt = require('bcryptjs')

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
const registrar_usuario =async(usuario,contra)=>{
    const usuario_encontrado = usuarios.find((a) =>a.nombre == usuario) 
    
    if(!usuario_encontrado){
        const salt = await bcrypt.genSalt(10);
        contra = await bcrypt.hash(contra, salt);
        console.log(contra)
    }
    else{
        console.log("el usuario ya existe")
    }
}
const validar_usuario=(usuario,contra)=>{
   
   const usuario_encontrado = usuarios.find((a) =>a.nombre == usuario) 
    
    if(usuario_encontrado){

           delete usuario_encontrado.contra
   }
   console.log(usuario_encontrado)

}

module.exports={
    validar_usuario,
    registrar_usuario
}