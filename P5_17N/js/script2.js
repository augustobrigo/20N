document.querySelector("#mostrarJS").onclick=function(){
document.querySelector("#cajaImagenes").innerHTML="";

for (let i=0;i<30;i++){
let aleatorio=Math.floor(Math.random()*60)+10;
let img1 = document.createElement("img");
img1.src = "https://randomuser.me/api/portraits/men/"+aleatorio+".jpg";

document.querySelector("#cajaImagenes").appendChild(img1);
}
}