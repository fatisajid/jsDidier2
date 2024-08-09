let livres = []; // let livres = new Array();

livres.push([101, 'Bel Ami', 'Guy de Maupassant']);
livres.push([104, 'Le comte de Monte Christo', 'Alexandre Dumas']);
livres.push([105, 'Les trois Mousquetaires', 'Alexandre Dumas']);
livres.push([106, 'I, robot', 'Richard Matheson']);

console.log(livres);

// EXO / AFFICHEZ DANS LE CONSOLE , L'AUTEUR DU 2EME LIVRE

console.log("livres[1]", livres[1]);
console.log("livres[1][2]", livres[1][2]);

// EXO : DOM (pour traduire les elements html en jss)
//  écrire dans la balise tbody "<tr><td>1</td><td>apprendre le js
// </td><td>Nordine Ateur</td></tr>"

let elementTbody = document.querySelector("tbody");
elementTbody.innerHTML = "<tr><td>1</td><td>apprendre le js</td><td>Nordine Ateur</td></tr>";
elementTbody.innerHTML += "<tr><td>2</td><td>un livre</td><td>Anne Onyme</td></tr>";

// Exo : remplir la table HTML avec les données de la variable "livres"

for(let i = 0; i < livres.length; i++){
    console.log(livres[i][0], livres[i][1], livres[i][2]);
    let ligne = "<tr>";
    ligne += "<td>" + livres[i][0] + "</td>";
    ligne += "<td>" + livres[i][1] + "</td>";
    ligne += "<td>" + livres[i][2] + "</td>";
    ligne += "</tr>";
    elementTbody.innerHTML += ligne;
}



