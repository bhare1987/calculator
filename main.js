function addListeners() {
 var buttons =  [].slice.call(document.querySelectorAll(".calButton")),
 clear = document.getElementById('clear'),
 evaluate = document.getElementById('evaluateCalc');
 buttons.forEach(function(item){
   item.addEventListener("click", getVal);
   item.addEventListener("click", displayVal);
 });
 clear.addEventListener("click", clearCalc);
 evaluate.addEventListener("click", calculate);
};

function getVal(e) {
   return this.textContent;
};

function displayVal() {
  var display = document.getElementById('input'),
  value = this.textContent;
  if (Number(value)){
    value = Number(value);
  } else {
    value;
  }
  if (display.innerHTML === "" || typeof value === "number") {
    display.textContent += value;
  } else if (typeof value === "string"){
    display.textContent += " " + value + " ";
  }
}

function clearCalc() {
  var display = document.getElementById('input');
  display.innerHTML = '';
}

function calculate() {
  var calculation = document.getElementById('input').textContent.split(" "),
  total = 0;
  if (calculation[1] === "X") {
    total = Number(calculation[0]) * Number(calculation[2]);
  } else if (calculation[1] === "/") {
    total = Number(calculation[0]) / Number(calculation[2]);
  } else if (calculation[1] === "+") {
    total = Number(calculation[0]) + Number(calculation[2]);
  } else if (calculation[1] === "-") {
    total = Number(calculation[0]) - Number(calculation[2]);
  }
  clearCalc();
  document.getElementById('input').innerHTML = '';
  document.getElementById('input').innerHTML = total;
}

addListeners();
