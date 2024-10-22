document.getElementById("submit").addEventListener("click",function (){
  const email =document.getElementById("email").value;
  const password =document.getElementById("pass").value;
if (email ==="jannat@gmail.com" && password === "JannaT123" ){
window.location.href= "takaPoisa.html"
}
else {
  alert("Taka churi korte aschos, tui sala chor");
}
});