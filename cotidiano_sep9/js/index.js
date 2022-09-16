




function areatri() {
    document.getElementById("area_triangulo").
        style.display = "block";
    document.getElementById("perimetro_triangulo").
        style.display = "none";
        document.getElementById("imagen").style.display="block";

}

function peritri() {
    document.getElementById("perimetro_triangulo").
        style.display = "block";
    document.getElementById("area_triangulo").
        style.display = "none";
        document.getElementById("imagen").style.display="block";

}


function areaCirculo() {
    document.getElementById("area_circulo").
        style.display = "block";
    document.getElementById("perimetro_circulo").
        style.display = "none";
        document.getElementById("circulo").style.display="block";


}

function perimetroCirculo() {
    document.getElementById("perimetro_circulo").
        style.display = "block";
    document.getElementById("area_circulo").
        style.display = "none";
        document.getElementById("circulo").style.display="block";

}

function areaCuadrado() {
    document.getElementById("area_cuadrado").
        style.display = "block";
    document.getElementById("perimetro_cuadrado").
        style.display = "none";
        document.getElementById("cuadrado").style.display="block";





}


function perimetroCuadrado() {
    document.getElementById("perimetro_cuadrado").
        style.display = "block";
    document.getElementById("area_cuadrado").
        style.display = "none";
        document.getElementById("cuadrado").style.display="block";

}


function areaRectangulo() {
    document.getElementById("area_rec").
        style.display = "block";
    document.getElementById("perimetro_rec").
        style.display = "none";
        document.getElementById("rectangulo").style.display="block";


}


function perimetroRectangulo() {
    document.getElementById("perimetro_rec").
        style.display = "block";
    document.getElementById("area_rec").
        style.display = "none";
        document.getElementById("cuadrado").style.display="block";

}


//CALCULO  DEL AREA DEL CUADRADO
let boton = document.getElementById('multiplicar');
let resultado = document.getElementById('resultado');

boton.addEventListener('click', hacermulti);

function hacermulti() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let resultado = n1 * n2;
    document.getElementById('resultado').value = resultado;




}

//CALCULO DEL PERIMETRO DEL CUADRADO
let btn = document.getElementById('sumar');
let resultado1 = document.getElementById('resultado1');

btn.addEventListener('click', hacersuma);

function hacersuma() {

    let l1 = parseFloat(document.getElementById('lado1').value);
    let l2 = parseFloat(document.getElementById('lado2').value);
    let l3 = parseFloat(document.getElementById('lado3').value);
    let l4 = parseFloat(document.getElementById('lado4').value);
    let resultado1 = l1 + l2 + l3 + l4;
    document.getElementById('resultado1').value = resultado1;
}


//AREA DEL CIRCULO
let buton = document.getElementById('calcular');
let resultado2 = document.getElementById('resultado2');
let pi = 3.1416;

buton.addEventListener('click', circuloarea)

function circuloarea() {

    let radio = parseFloat(document.getElementById('radio1').value);
    let resultado2 = pi * radio * radio;
    document.getElementById('resultado2').value = resultado2;


}

//PERIMETRO DEL CIRCULO
let botonn = document.getElementById('calcularr');
let resultado3 = document.getElementById('resultado3');
let dos=2;
let π = 3.1416;

botonn.addEventListener('click', perimetro)

function perimetro() {
    let radius = parseFloat(document.getElementById('radio').value);
    let resultado3 = dos * π * radius ;
    document.getElementById('resultado3').value = resultado3;
}


//AREA TRIANGULO
let botom = document.getElementById('calcu');
let resultado4 = document.getElementById('resultado4');
let two=2;

botom.addEventListener('click', area)

function area() {
    let b = parseFloat(document.getElementById('base').value);
    let h=parseFloat(document.getElementById('altura').value);
    let resultado4 = b * h / two ;
    document.getElementById('resultado4').value = resultado4;
}

//PERIMETRO DEL TRIANGULO
let butoon = document.getElementById('sum');
let resultado7 = document.getElementById('resultado7');

butoon.addEventListener('click', hacerperimetro);

function hacerperimetro() {

    let numero1 = parseFloat(document.getElementById('num1').value);
    let  numero2= parseFloat(document.getElementById('num2').value);
    let  numero3= parseFloat(document.getElementById('num3').value);
    let resultado7 = numero1 + numero2 + numero3 ;
    document.getElementById('resultado7').value = resultado7;
    }


//AREA RECTANGULO
let botomm = document.getElementById('multiplique');
let resultado5 = document.getElementById('resultado5');

botomm.addEventListener('click', hacerarea);

function hacerarea() {
    let num1 = parseFloat(document.getElementById('b').value);
    let num2 = parseFloat(document.getElementById('h').value);
    let resultado5 = num1 * num2;
    document.getElementById('resultado5').value = resultado5;

}

//PERIMETRO RECTANGULO
let button = document.getElementById('suma');
let resultado6 = document.getElementById('resultado6');

button.addEventListener('click', hacerperime);

function hacerperime() {

    let base = parseFloat(document.getElementById('nu1').value);
    let  base2= parseFloat(document.getElementById('nu2').value);
    let  altura= parseFloat(document.getElementById('nu3').value);
    let  altura2= parseFloat(document.getElementById('nu4').value);
    let resultado6 = base + base2 + altura + altura2;
    document.getElementById('resultado6').value = resultado6;
    }