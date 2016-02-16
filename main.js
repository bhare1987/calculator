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
  if (display.innerHTML === "") {
    display.textContent += value;
  } else {
  display.textContent += " " + value;
  }
}

function clearCalc() {
  var display = document.getElementById('input');
  display.innerHTML = '';
}

function calculate() {
  var calculation = document.getElementById('input').textContent.split(" ");
  console.log(calculation);
}

addListeners();
