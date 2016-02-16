function addListeners() {
 var buttons =  [].slice.call(document.querySelectorAll(".calButton"));
 buttons.forEach(function(item){
   item.addEventListener("click", getVal);
 });
};

function getVal(e) {
  console.log(this.textContent);
   return this.textContent;
};

addListeners();
