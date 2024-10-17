let usuario='Admin';
let contraseña='Admin';
let validarUsuario=prompt("Ingrese su usuario")
let validarContraseña=prompt("Ingrese su contraseña")

// if(usuario==validarUsuario && contraseña==validarContraseña){
//     console.log(" Bienvenido, "+usuario)
// }
// else{console.log("Valide sus datos")}

if(usuario==validarUsuario){
    if(contraseña==validarContraseña){
        console.log("Bienvenido: "+validarUsuario);
        
        let opcion=Number(7)
        let opc=Number();
        do{
            switch(opc){
                case 1:
                    break;
                
                case 2:
                    break;
                case 3:
                    break;    
                case 4:
                    break;
            }
    
        }
        while(opcion!=7)
    }else{console.log("Contraseña incorrecta");
    }
}else{console.log("Usuario no existe");
}
let opcion=Number(7)
let opc=Number();
do{
    switch(opc){
        case 1:
            

    }
    
}
while(opcion!=7)