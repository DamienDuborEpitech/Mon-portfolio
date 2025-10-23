function sendMail(){

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    var parametres = {
        nom,
        email,
        message
    };

    const serviceID = "service_dxouwls";
    const templateID = "template_y4a3skb";

    if (!nom || !email || !message) {
        alert("Veuillez remplir tous les champs avant d'envoyer votre message.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
    }

    emailjs.send(serviceID,templateID,parametres).then((res)=>{
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Votre message a bien été envoyé !");
    })
    .catch((err)=>console.log(err));
}


