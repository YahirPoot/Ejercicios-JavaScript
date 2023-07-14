// Ejercicio 1 verificar Edad
function verificarEdad () {
    var edad = parseInt(prompt("Por favor ingrese su edad:"));
        if(edad > 18) {
            alert("Ya puedes conducir");
        }
        else if(edad <= 18) {
            alert("Aun no pudes conducir");
        }
        else
        {
            if(edad != undefined) {
                alert("Esto no es valido");
            }
        }

}

//Ejercicio 2 verificar Nota
function verificarNota() {
    var nota = parseInt(prompt("Ingrese la nota;"));

    if(nota > 0 && nota <= 10) {
        if(nota < 3) {
            alert("Muy deficiente");
        }
        else if(nota < 5) {
            alert("Insuficiente");
        }
        else if(nota < 6) {
            alert("Sufificiente");
        }
        else if(nota < 7) {
            alert("Bien");
        }
        else if(nota < 9) {
            alert("Notable");
        }
        else if (nota <= 10) {
            alert("Sobresaliente");
        }
    } else {
        alert("La nota es incorrecta");
    }
}

//Ejercicio 3 Cadena de Texto 
function cadenaTexto() {
    var respuesta = "" 

    do{
        var cadena = prompt("Ingrese un texto");
        if(respuesta == "") {
            respuesta = respuesta + cadena;
        }
        else {
            respuesta = respuesta + " " + cadena;
        }
    } while(confirm("¿Continuar?"))
    document.write(respuesta);
}

//Ejercicio 4 Calcular el valo de la letra de DNI
function calcularDNI() {
    var resto = 0;
    var letra ="";
    do{
        var numero = prompt("Ingrese su DNI: ");

        if(Number(numero) == numero){
            if(numero >= 0 && numero <= 99999999) {
                resto = numero % 23;
    
                switch(resto) {
                    case 0:
                        letra = "T";
                    break;
                    case 1:
                        letra = "R";
                    break;
                    case 2:
                        letra = "W";
                    break;
                    case 3:
                        letra = "A";
                    break;
                    case 4:
                        letra = "G";
                    break;
                    case 5:
                        letra = "M";
                    break;
                    case 6:
                        letra = "Y";
                    break;
                    case 7:
                        letra = "F";
                    break;
                    case 8:
                        letra = "P";
                    break;
                    case 9:
                        letra = "D";
                    break;
                    case 10:
                        letra = "X";
                    break;
                    case 11:
                        letra = "B";
                    break;
                    case 12: 
                        letra = "N";
                    break;
                    case 13:
                        letra = "J";;
                    break;
                    case 14:
                        letra = "Z";
                    break;
                    case 15:
                        letra = "S";
                    break;
                    case 16:
                        letra = "Q";
                    break;
                    case 17:
                        letra = "V";
                    break;
                    case 18:
                        letra = "H";
                    break;
                    case 19:
                        letra = "L";
                    break;
                    case 20:
                        letra = "C";
                    break;
                    case 21:
                        letra = "K";
                    break;
                    case 22:
                        letra = "E";
                    break;
    
                    default:
                        alert("Número Erroneo");
                }
            }
            alert("Número: "+ numero + " Letra: "+ letra);
        }
        else {
            if(numero != undefined) {
                alert(numero + "No es un número")
            }
        }
    }
    while (numero != undefined);
}