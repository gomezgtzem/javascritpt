// var nombre = prompt('Escriba su nombre por favor');
// document.write('Hola ',nombre.toLocaleLowerCase(), ' saludos desde javascript');

// function operaciones(){
//     a= Number (prompt('Ingresa el primer numero'));
//     b= Number (prompt('Ingresa el primer numero'));
//     console.log('La suma de',a,'+',b,'es igual a:',a+b);
//     console.log('La resta de',a,'-',b,'es igual a:',a-b);
//     console.log('La multiplicacion de',a,'x',b,'es igual a:',a*b);
//     console.log('La division de',a,'÷',b,'es igual a:',a/b);
//     document.write( 'La suma de: ',a,'+',b,' es igual a :',a+b+'<br>'+
//                     'La resta de: ',a,'-',b,' es igual a :',a-b+'<br>'+
//                     'La multiplicacion de: ',a,'x',b,' es igual a :',a*b+'<br>'+
//                     'La division de: ',a ,'÷',b,' es igual a :',a/b+'<br>');
// }
// operaciones();

function operaciones(){
        a= Number (prompt('Ingresa el primer numero'));
        b= Number (prompt('Ingresa el segundo numero'));
    operacion = Number (prompt( 'Que operacion realizaras?\n'
                        +'1.-Suma\n'
                        +'2.-Resta\n'
                        +'3.-Multiplicación\n'
                        +'4.-División'));
    switch (operacion){
        case 1:
            document.write( 'La suma de: ',a,'+',b,' es igual a :',a+b+'<br>');
                console.log("Entro a suma");
            break;
        case 2:
            document.write('La resta de: ',a,'-',b,' es igual a :',a-b+'<br>');
                console.log("Entro a resta");
            break;
        case 3:
            document.write('La multiplicacion de: ',a,'x',b,' es igual a :',a*b+'<br>');
                console.log("Entro a multiplicar");
            break;
        case 4:
            document.write('La division de: ',a ,'÷',b,' es igual a :',a/b+'<br>');
                console.log("Entro a dividir");
            break;
        default:
            console.log("Selecciona una operacion valida");
            break;
    }
}
operaciones();