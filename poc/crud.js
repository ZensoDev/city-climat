var titre = window.document.createElement("h1");

titre.innerHTML = "Mon <b>titre</b>"
window.document.body.appendChild(titre);

window.document.body.removeChild(titre);

console.log(titre);