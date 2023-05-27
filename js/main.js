    // la variable A captura el 1 valor a lo igual que B y S es el espacio para el resultado//

function suma() {
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;
    //SE LE PIDE AL USUARIO INGRESAR LOS VALORES EN LOS ESPACIOS//
    A=parseInt(prompt("Porfavor ingrese el primer valor"));
    B=parseInt(prompt("Porfavor ingrese el segundo valor"));
    S= A+B;
    alert("La suma es: "+S);
}
function opbasicas() {
    A=parseInt(prompt("Porfavor ingrese el primer valor"));
    B=parseInt(prompt("Porfavor ingrese el segundo valor"));
    R= A-B;
    M =A*B;
    D =A/B;
    alert("La resta es: "+R);
    alert("La multiplicacion es: "+M);
    alert("La division es: " +D)
}
function cuadrado(){
    let N = 0;
    let base= 0;
    N=parseInt(prompt("Digite el lado a calcular"));
    base= N*N;
    alert("El valor de los lados es:" +base);
    }

    //un individuo desea invertir su capital en un banco y requiere un sistema que le permita saber cuanto dinero gana despues de N número de años teniendo encuenta q el banco pago el 1,7 mensual//
    function inversion(){
    let monto = 0;
    let meses = 0;
    let total=0;
    let total1=0;
    let tasa= 1.7;
    monto=parseInt(prompt("Ingrese el monto a invertir"));
    meses=parseInt(prompt("Ingrese número de meses"));
    total= monto*meses;
    total1= total*tasa/100;
    alert("Sus ganancia son de: " +total1);
    }

    //REALIZAR UN ALGORITMO QUE PERMITA SABER EL AÑO DE NACIMIENTO DE UN INDIVIDUO INGRESANDO SU EDAD Y EL AÑO ACTUAL//
    function año(){
    let añop=0;
    let edad=0;
    let nacimiento=0;
    añop=parseInt(prompt("Ingrese el año actual"));
    edad=parseInt(prompt("Digite su edad "));
    nacimiento=añop-edad;
    alert("Su año de nacimiento es: " +nacimiento);
    }

    //INGRESE UNA MEDIDA EN METROS Y CONVIERTALA EN PULGADAS Y KILOMETROS//
        function conversion(){
        let mts =0;
        let km =0.001;
        let pl =39.3701;
        mts=parseInt(prompt("Digite la unidad de medida: "));
        km=mts*km
        pl=mts*pl
        alert("Medida en kilometros: " +km);
        alert("Medida en pulgadas: "+pl)
        }
    