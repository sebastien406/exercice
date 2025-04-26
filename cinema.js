
let nom = prompt("Quel est ton nom?");
console.log(nom);
let prenom = prompt("quel est ton prénom?")
let age = parseInt(prompt("Tu as quel âge?"));
console.log(age);
let estEtudiant = prompt("Est tu étudiant ?  (oui/non)").toLowerCase () === " oui ";
console.log(estEtudiant);
let nombreTickets = parseInt(prompt ("T'en veux combien des tickets?"));
console.log(nombreTickets);
let reduction;
const prixBase = 12;

function calculerPrixTicket(age, estEtudiant, nombreTickets) {
    const prixBase = 12;
    let prixReduit = prixBase;
  
    if (age < 12) {
      prixReduit *= 0.5; 
    } else if (age > 60) {
      prixReduit *= 0.7;
    } else if (estEtudiant) {
      prixReduit *= 0.8; 
    }
  

    if (nombreTickets > 3) {
      prixReduit *= 0.9; 
    }
  
    return prixReduit;
  }
  calculerPrixTicket();
     console.log("Prix pour un étudiant de 24 ans :", calculerPrixTicket(20, true), "€");
                             
    function calculerPrixTotal(age, estEtudiant, nombreTickets) {
        const prixBase = 12; 
        const prixTotalSansReduction = prixBase * nombreTickets;
        let prixAvecReduction = 34.56;
      
      
        if (age < 12) {
          prixAvecReduction *= 0.5; 
        } else if (age > 60) {
          prixAvecReduction *= 0.7; 
        } else if (estEtudiant) {
          prixAvecReduction *= 0.8; 
        }
      
        if (nombreTickets > 3) {
          prixAvecReduction *= 0.9; 
        }
      
        return{
            prixAvecReduction: prixAvecReduction.toFixed(2)
        };
      }
     
calculerPrixTotal();
      console.log(calculerPrixTotal(24, true, 4));



let parts = nom.split(" ");
let Prenom = parts[1];
let Nom = parts[0];


let deuxPremièresLettresNom = Nom.slice(0, 2).toUpperCase();
console.log("Les 2 premières lettres du nom (en majuscules) :", deuxPremièresLettresNom);

alert(`Bonjour ! ${Nom} ton nom commence par ${deuxPremièresLettresNom}, tu as ${age} ans et tu as ${nombreTickets} tickets pour `);
