console.log("Début du script");

setTimeout(function() {
  console.log("Action A (attente 1000 ms)");
}, 1000);

setTimeout(function() {
  console.log("Action B (attente 500 ms)");
}, 500);

console.log("Fin du script");


document.getElementById("btnCharger").addEventListener("click", function() {
  document.getElementById("contenu").textContent = "Chargement en cours...";

  setTimeout(function() {
    document.getElementById("contenu").textContent = "Contenu chargé avec succès ✅";
  }, 2000);
});

function direBonjour(nom) {
  console.log("Bonjour " + nom);
}

function executerCallback(callback) {
  const nom = "Nuno";
  callback(nom);
}

executerCallback(direBonjour); // Affiche : Bonjour Nuno


function attendreEtDireBonjour(nom, callback) {
  setTimeout(function() {
    callback(nom);
  }, 5000);
}

attendreEtDireBonjour("Angélique", function(prenom) {
  console.log("Bonjour après 5s, " + prenom);
});


// defi 1
console.log("Début défi 1");

setTimeout(function() {
  console.log("3 secondes se sont écoulées ! (attente 3000 ms)");
}, 3000);


console.log("Fin défi 1 ");


// défi 2 

console.log("Début du script défi 2");

setTimeout(function() {
  console.log("Message 1 (attente 1000 ms)");
}, 1000);

setTimeout(function() {
  console.log("Message 2 (attente 2000 ms)");
}, 2000);

console.log("Fin du script défi 2");

// défi 3 

document.getElementById("Charger").addEventListener("click", function() {
  document.getElementById("container").textContent = "Attend ça arrive !";

  setTimeout(function() {
    document.getElementById("container").textContent = "Bravo mon champion !";
  }, 2000);
});

// défi 4

let compteurElement = document.getElementById('compteur');
  let demarrerBouton = document.getElementById('demarrer');
  let arreterBouton = document.getElementById('arreter');
  let intervalId;
  let compteur = 0;

  demarrerBouton.addEventListener('click', function() {
    if (!intervalId) {
      intervalId = setInterval(function() {
        compteur++;
        compteurElement.textContent = compteur;
      }, 1000);
    }
  });

  arreterBouton.addEventListener('click', function() {
    clearInterval(intervalId);
    intervalId = null;
  });