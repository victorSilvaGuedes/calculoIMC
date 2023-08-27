const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

function recebeEventoForm(e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('.inputPeso');
  const inputAltura = e.target.querySelector('.inputAltura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso || !altura) {
    setResultado('Peso ou altura inválidos! Tente novamente!');
    return;
  }

  if (altura > 3) {
    setResultado('A altura precisa estar em centímetros!');
    return;
  }

  const IMC = getIMC(peso, altura);
  const nivelIMC = getNivelIMC(IMC);
  const msg = `IMC = ${IMC} - ${nivelIMC}`;
  setResultado(msg);
}

form.addEventListener('submit', recebeEventoForm);

function getNivelIMC(imc) {
  const resultados = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade 1',
    'Obesidade 2',
    'Obesidade 3',
  ];

  if (imc < 18.5) {
    return resultados[0];
  }
  if (imc >= 18.5 && imc <= 24.9) {
    return resultados[1];
  }
  if (imc >= 25 && imc <= 29.9) {
    return resultados[2];
  }
  if (imc >= 30 && imc <= 34.9) {
    return resultados[3];
  }
  if (imc >= 35 && imc <= 39.9) {
    return resultados[4];
  }
  if (imc > 40) {
    return resultados[5];
  }
}

function getIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}

function criaParagrafo() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = ``;

  const p = criaParagrafo();

  p.innerHTML = msg;
  resultado.appendChild(p);
}
