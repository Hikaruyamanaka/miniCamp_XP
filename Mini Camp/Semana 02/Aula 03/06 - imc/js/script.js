function start() {
  var buttonCalculateImc = document.querySelector("#button-calculate-imc");
  buttonCalculateImc.addEventListener("click", handleButtonClick);

  var inputWeight = document.querySelector("#input-weight");
  var inputheight = document.querySelector("#input-height");

  inputWeight.addEventListener('input',handleButtonClick);
  inputheight.addEventListener('input',handleButtonClick);
  
  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector("#input-weight");
  var inputheight = document.querySelector("#input-height");
  var imcResult = document.querySelector("#imc-result");

  var weight = Number(inputWeight.value);
  var height = Number(inputheight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');  

  imcResult.textContent = formattedImc;  
}

start();
