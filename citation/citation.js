const citations = [
    "Qui pête pu!",
    "Pierre qui mousse n'ammasse pas moule !",
    "C'est celui qui dit qui est !",
    "J'ai toujours raison même quand j'ai tort !",
    "Celui qui lit cette citation à une petite bite !",
];

const citationElement = document.getElementById('Citation');
const nouveauButton = document.getElementById('btnNouvelleCitation');
let derniereCitation = "";

function afficherCitationAleatoire() {
    let nouvelleCitation;
    do {
        const randomIndex = Math.floor(Math.random() * citations.length);
        nouvelleCitation = citations[randomIndex];
    } while (nouvelleCitation === derniereCitation && citations.length > 1);

    citationElement.textContent = nouvelleCitation;
     derniereCitation = nouvelleCitation;
}

nouveauButton.addEventListener('click', afficherCitationAleatoire);


afficherCitationAleatoire();