function suma(){
    var numero1 = document.getElementById('cajaTexto1').value;
    var numero2 = document.getElementById('cajaTexto2').value;
    var resultado = 0;
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    resultado = parseFloat(resultado);
    resultado = numero1 + numero2;
    resultado= document.getElementById('cajaTexto3').value = resultado;
    return false;
}
function resta(){
    var numero1 = document.getElementById('cajaTexto1').value;
    var numero2 = document.getElementById('cajaTexto2').value;
    var resultado = 0;
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    resultado = parseFloat(resultado);
    resultado = numero1 - numero2;
    resultado= document.getElementById('cajaTexto3').value = resultado;
    return false;
}
function multiplicacion(){
    var numero1 = document.getElementById('cajaTexto1').value;
    var numero2 = document.getElementById('cajaTexto2').value;
    var resultado = 0;
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    resultado = parseFloat(resultado);
    resultado = numero1 * numero2;
    resultado= document.getElementById('cajaTexto3').value = resultado;
    return false;
}
function division(){
    var numero1 = document.getElementById('cajaTexto1').value;
    var numero2 = document.getElementById('cajaTexto2').value;
    var resultado = 0;
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    resultado = parseFloat(resultado);
    resultado = numero1 / numero2;
    resultado= document.getElementById('cajaTexto3').value = resultado;
    return false;
}