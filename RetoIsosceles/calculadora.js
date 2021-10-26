function alturaTriangulo(a, b, c) {
    if (a === b) {
        altura = Math.sqrt(((a*a) - (c/2)))
    return altura;
    }
    else
    alert("No es un triangulo isosceles")
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const a = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const b = Number (input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const c = Number(input3.value);

    const h = alturaTriangulo(a,b,c);
    alert(h);
}

