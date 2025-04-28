// défi1
function saluerUtilisateur(prenom){
    console.log("Bonjour" + prenom);
}

saluerUtilisateur("Seb");
saluerUtilisateur("Les gens");

// défi2
function addition(a, b){
    return a + b;
}
let resultat = addition (2, 3);
console.log(resultat);

// défi3
function estPair(nombre){
    if (nombre % 2 === 0){
        return true;
    } else {
        return false;
    }
}
console.log (estPair(8));
console.log (estPair(9));

// défi4
function calculerMoyenne(note1, note2, note3){
   let somme = note1 + note2 + note3;
   let moyenne = somme / 3;
    return moyenne;
}
let devoir1 = 12;
let devoir2 = 14;
let devoir3 = 16;

let moyenneTotal = calculerMoyenne(devoir1, devoir2, devoir3);
console.log("La moyenne est de:", moyenneTotal);
// alert (
//     `La moyenne est de ${moyenneTotal}`
// )

// défi5
function plusGrand( nombreA, nombreB){
    if(nombreA > nombreB){
        return nombreA;
    } else {
        return nombreB;
    }
}
let chiffreA = 5;
let chiffrreB = 6;
let grandChiffre = plusGrand( chiffreA, chiffrreB);
console.log( "Le plus grand chiffre est:", grandChiffre);