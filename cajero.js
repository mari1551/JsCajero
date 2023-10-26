var clave_guardada=1234;
var saldo=200000;
var opcion;

var clave_ingresada= prompt("Ingrese clave");
clave_ingresada=validarNum(clave_ingresada);
if(clave_ingresada){
    if(clave_ingresada!=clave_guardada){
        alert("Clave inválida");
    }
    else{
        
        do{
            do{
                var opcion= prompt("Seleccione una opción:"+
                "\n1. Depositar"+
                "\n2. Extraer"+
                "\n3. Ver Saldo"+
                "\n4. Cambiar clave"+
                "\n5. Salir");
                opcion=validarNum(opcion);
                if(opcion<1 || opcion>5){
                    alert("Opción no valida - seleccione otra opción");
                    opcion=false;
                }
            }while(opcion==false);

            switch(opcion){
                case 1:
                    do{
                        var monto = prompt("Ingrese el monto a depositar");
                        monto=validarNum(monto);
                    }while(monto==false);
                    saldo=saldo+monto;
                    alert("Deposito realizado satisfactoriamente");
                    break;
                case 2:
                    do{
                        var monto = prompt("Ingrese el monto a extraer");
                        monto=validarNum(monto);
                    }while(monto==false);
                    if(saldo>=monto){
                        saldo=saldo-monto;
                        alert("Extracción realizada");
                    }
                    else{
                        alert("Monto no disponible");
                    }
                    break;
                case 3:
                    alert("El saldo disponible es: "+saldo);
                    break;
                case 4:
                    clave_ingresada= prompt("Ingrese clave");
                    clave_ingresada=validarNum(clave_ingresada);
                    if(clave_ingresada){
                        if(clave_ingresada!=clave_guardada){
                            alert("Clave inválida");
                        }else{
                            var nuevaclave=prompt("Ingrese nueva clave de 4 digitos");
                            nuevaclave=validarNum(nuevaclave);
                            if(nuevaclave==false){
                                alert("No es posible asignar esa clave\nIntente nuevamente");
                            }
                            else{
                                clave=nuevaclave;
                                alert("Clave cambiada satisfactoriamente");
                            }
                        }
                    }                   
                    break;
                case 5:
                    break;
            }
        }while(opcion!=5);
    }   
        

}

//----------------------------------------------------------------------------------------
//funcion para validar numeros
function validarNum(num){
    num=Number(num);
    if(isNaN(num)){
        alert("No es un numero valido");
        return false;
    }        
    else{
        return num;
    }            
}


   