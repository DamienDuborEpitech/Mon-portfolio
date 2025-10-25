const texteIntro = document.getElementById("texteIntro");
const PlusVite = document.getElementById("PlusVite");
const MoinsVite = document.getElementById("MoinsVite");





let vitesse = 81;
let i = 0;
let texte = texteIntro.innerHTML; 
let taille =texte.length;
console.log(taille)

PlusVite.addEventListener("click",() =>{
    if(vitesse>10){
      vitesse -=10;  
    }
});

/*Plus la val est petite, plus ça va vite */


MoinsVite.addEventListener("click",() =>{
    vitesse +=10;
}); 





function ecrire() {
  if (i < taille) {
    // Cas ou on a une balise html : 
    if (texte[i] === "<") {
      const finBalise = texte.indexOf(">", i);
      if (finBalise !== -1) {
        texteIntro.innerHTML += texte.slice(i, finBalise + 1);
        i = finBalise + 1; 
      } else {
        texteIntro.innerHTML += texte[i];
        i++;
      }
    } else {
      texteIntro.innerHTML += texte[i];
      i++;
    }
    setTimeout(ecrire, vitesse);
  }
}

texteIntro.innerHTML = ""; 

ecrire();