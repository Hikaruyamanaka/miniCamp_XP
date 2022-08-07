function start() {
  var buttonCalculateImc = document.querySelector("#button-calculate-imc");
  buttonCalculateImc.addEventListener("click", handleButtonClick);

  var inputWeight = document.querySelector("#input-weight");

  var inputheight = document.querySelector("#input-height");

  inputWeight.addEventListener("input", handleButtonClick);

  inputheight.addEventListener("input", handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector("#input-weight");
  var inputheight = document.querySelector("#input-height");
  var imcResult = document.querySelector("#imc-result");

  var imcText = document.querySelector("#imc-text");

  var weight = Number(inputWeight.value);
  var height = Number(inputheight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace(".", ",");

  imcResult.textContent = formattedImc;

  function verificarIMC(imc) {
    if (imc < 16) {
      return "Valor inválido";

    } else if (imc >= 16 && imc < 17) {
      return " Muito abaixo do peso";

    } else if (imc >= 17 && imc < 18.5) {
      return "Abaixo do peso";

    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";

    } else if (imc >= 25 && imc < 30) {
      return "Acima do peso";
      
    } else if (imc >= 30 && imc < 35) {
      return "Obesidade I";

    } else if (imc >= 35 && imc <= 40) {
      return "Obesidade II";

    } else if (imc > 40) {
      return "Obesidade III";
    }
    
  }

  imcText.textContent = verificarIMC(imc);
}

start();
