function perimetroCuadrado(lado) {
    return lado * 4;
  }
  
  function areaCuadrado(lado) {
    return lado * lado;
  }
  
  console.groupEnd();
  
  console.group("Triangulos");
  
  function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
  }
  
  function areaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  console.groupEnd();
  
  console.group("Circulos");
  
  function diametroCirculo(radio) {
    return radio * 2;
  }
  
  const PI = Math.PI;
  
  function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
  }
  
  function areaCirculo(radio) {
    return (radio * radio) * PI;
  }
  
  console.groupEnd();

  // Aqui interactuamos con el HTML

  function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);   
  }

  function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number (input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
  }
  function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTrianguloBase");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputAlturaTriangulo");
    const value2= Number(input2.value);

    const area = areaTriangulo(value1, value2);
    alert(area);   
  }

  function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
  }
  function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);
    
    const area = areaCirculo(value);
    alert(area);   
  }