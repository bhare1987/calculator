var calcString = "";

(function addListeners() {
 var buttons =  [].slice.call(document.querySelectorAll(".calButton")),
 clear = document.getElementById('clear'),
 evaluate = document.getElementById('evaluateCalc');
 buttons.forEach(function(item){
   item.addEventListener("click", getVal);
   item.addEventListener("click", displayVal);
 });
 clear.addEventListener("click", clearCalc);
 evaluate.addEventListener("click", calculate);
})();

function getVal() {
  var value = "";
  if (this.textContent === "X") {
    calcString += "*";
  } else {
    calcString += this.textContent;
  }
};

function displayVal() {
  var display = document.getElementById('input'),
  value = this.textContent;
  if (Number(value)){
    value = Number(value);
  } else {
    value;
  }
  if (display.innerHTML === "" || typeof value === "number" || value === ".") {
    display.textContent += value;
  } else if (typeof value === "string" && value !== "."){
    display.textContent += " " + value + " ";
  }
}

function clearCalc() {
  var display = document.getElementById('input');
  display.innerHTML = '';
  calcString = '';
}

function calculate() {
  var calculation = eval(calcString);
  clearCalc();
  document.getElementById('input').innerHTML = calculation;
  calcString += calculation;
}
