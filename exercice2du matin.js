let choixChiffre = prompt("Choisie un chiffre entre 1 et 5 pour savoir quel animal magique sommeille en toi!");
let magie = Number(choixChiffre);

function revelerAnimal(magie){
   
    if (magie === 1){
        alert("Tu es une très jolie Licorne");
    } else if (magie === 2){
        alert("Félicitation tu es une grenouille, cela ne m'étonne même pas!");
    } else if(magie === 3 ){
        alert("Trop bien tu es un puissant dragon avec un max de swag!");
    } else if (magie === 4 ){
        alert("Trop fort tu es un hibou très très chouette hahahaha");
    } else if(magie === 5 ){
        alert("tu es mou et lent pour la peine tu seras un escargot!");
    } else {
        alert("Chiffre magique inconnu, tu es surement trop fort ou trop nul!");
    }
}

revelerAnimal(magie);















//   // Appel de la fonction avec le choix de l'utilisateur
//   revelerAnimal(choix);