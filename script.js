document.getElementById("submit").addEventListener("click", function (){
const inputF = document.getElementById("inputF").value;
const inputL = document.getElementById("inputL").value;
const span = document.getElementById("spanValue");
const convertFirst = parseInt(inputF);
const convertList = parseInt(inputL);
 const result =convertFirst + convertList;
 span.innerText = result;
});