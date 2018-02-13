var elements;





// faire apparaitre un message d'erreur lorsque le contenu d'un champs est vide :
formulaire.onsubmit = function(event){
    console.log(event);
    return false;

    var input = formulaire.getElementsByTagName("input");
    var preventDefault = true; // si il y a une erreur, on changera à false pour ne pas envoyer le formulaire
    for (var key in input){
        if ("object" !== typeof input[key] || "submit" == input[key].type){
            continue; //fin de la boucle for
        }

        if(!input[key].value){
            //console.log(input[key]);
            preventDefault = false;
        }
        
    }
    return preventDefault;
}

// var titre = window.document.createElement("h1");
// var entrer = window.document.createElement("br");
// var entrer1 = window.document.createElement("br");
// var entrer2 = window.document.createElement("br");
// var entrer3 = window.document.createElement("br");
// var entrer4 = window.document.createElement("br");
// var entrer5 = window.document.createElement("br");
// var entrer6 = window.document.createElement("br");
// var entrer7 = window.document.createElement("br");
// var entrer8 = window.document.createElement("br");
// var form = window.document.createElement("form");

// var labelemail = window.document.createElement("label");
// var labelobjet = window.document.createElement("label");
// var labeltelephone = window.document.createElement("label");
// var labelmsg = window.document.createElement("label");

// var inputemail = window.document.createElement("input");
// inputemail.setAttribute("placeholder", "Entrer votre email");
// var inputobjet = window.document.createElement("input");
// inputobjet.setAttribute("placeholder", "Entrer votre objet");
// var inputtelephone = window.document.createElement("input");
// inputtelephone.setAttribute("placeholder", "Entrer votre téléphone");

// var textarea = window.document.createElement("textarea");
// var bouton = window.document.createElement("input");
// bouton.setAttribute("type", "submit");

// form.setAttribute("method", "POST");
// form.setAttribute("action", "");


// titre.innerHTML = "Form Validation"
// labelemail.innerHTML = "email :"
// labelobjet.innerHTML = "objet :"
// labeltelephone.innerHTML = "téléphone :"
// labelmsg.innerHTML = "Message :"


// window.document.body.appendChild(form);
// window.document.body.appendChild(titre);
// window.document.body.appendChild(labelemail);
// window.document.body.appendChild(inputemail);
// window.document.body.appendChild(entrer);
// window.document.body.appendChild(entrer6);
// window.document.body.appendChild(labelobjet);
// window.document.body.appendChild(inputobjet);
// window.document.body.appendChild(entrer1);
// window.document.body.appendChild(entrer7);
// window.document.body.appendChild(labeltelephone);
// window.document.body.appendChild(inputtelephone);
// window.document.body.appendChild(entrer2);
// window.document.body.appendChild(entrer8);
// window.document.body.appendChild(labelmsg);
// window.document.body.appendChild(textarea);
// window.document.body.appendChild(entrer3);
// window.document.body.appendChild(entrer4);
// window.document.body.appendChild(bouton);

// bouton.onsubmit = function (){
//     console.log("Formulaire OK");
// }



// titre.onclick = function (){
//     console.log("Hello");
// }

// console.log(titre);