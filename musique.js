const BoutonPlay = document.getElementById("BoutonPlay");
const BoutonPause = document.getElementById("BoutonPause");
const monAudio = document.getElementById("monAudio");

BoutonPlay.addEventListener("click",() =>{
  monAudio.play();
});

BoutonPause.addEventListener("click",() =>{
  monAudio.pause();
});