// function direBonjour() {
//   alert("Bonjour !");
// }

// let bouton = document.getElementById("btnEvent");

// bouton.addEventListener("click", function() {
//   alert("Événement capturé avec addEventListener !");
// });

// document.getElementById("btnEventObject").addEventListener("click", function(event) {
//   console.log(event);
//   alert("Regarde dans la console !");
// });

// let zone = document.getElementById("zoneMultiEvent");

// zone.addEventListener("mouseover", function() {
//   zone.style.backgroundColor = "yellow";
// });

// zone.addEventListener("mouseout", function() {
//   zone.style.backgroundColor = "lightblue";
// });



// exercice 1
function Bravo() {
    alert("Bravo , tu as cliqué!");
}
// exercice 2
let paragraphe = document.getElementById("couleur");

paragraphe.addEventListener("click", function() {
    paragraphe.style.color = "red";
});
// exercice 3
let bouton = document.getElementById("grand"); 
bouton.addEventListener("mouseover" , function() {
    bouton.style.transform ="scale(1.2)";
});
bouton.addEventListener("mouseout" , function() {
    bouton.style.transform = "scale(1)";
});
// exercice 4

const likeButton = document . getElementById ( 'likeButton' ); 
const likeCount = document . getElementById ( 'likeCount' ); 
let likes = 0 ; 

likeButton. addEventListener ( 'click' , () => { 
 likes++; 
  likeCount. innerText = likes; 
  console.log(likes);

});


// exercice 5
const Button = document . getElementById ( 'Button' ); 
const Count = document . getElementById ( 'Count' ); 
let Likes = 0 ;

Button. addEventListener ( 'click' , () => { 
 Likes++; 
  Count. innerText = Likes; 
  console.log(Likes);
    if(Likes === 3) {
  Button.disabled = true;
  }
});



//   exercice 6

function Paragraphe() {
    const nouveauParagraphe = document.createElement("nouveau");
    nouveauParagraphe.textContent = "Nouveau paragraphe";
    document.getElementById("nouveauParagraphe").appendChild(nouveauParagraphe);
  };

  // exercice 7 

   function supprimerElement() {
    const element = document.getElementById("Supprime");
    element.remove();
  }

  // exercice 8
console.log(document.querySelectorAll("h2"));
  
let title = [document.querySelectorAll("h2")];
let copie = [title.innerHTML];

title.forEach(function (item) {
  copie.push(item);
});
console.table(copie);
 


// exercice smootkies

// Liste fixe de fruits
	const fruits = ["fraise", "banane", "kiwi magique", "pomme", "ananas", "framboise", "mangue"];
  let compteur = 0; // Compteur initialisé à zéro
	let indexDepart = 0; // Point de départ dans le tableau


  const preparerBtn = document.getElementById("btnSmoothie");
  const btnBoire = document.getElementById("btnBoire");

  preparerBtn.addEventListener("click" , preparerSmoothie);
  btnBoire.addEventListener("click" , boireSmoothie);
	// Fonction de préparation
	function preparerSmoothie() {
    const resultat = document.getElementById("resultat");
    resultat.innerHTML = "";
    let smoothie = [];

    for (let counter = 0; counter < 3; counter ++){
      // let index = indexDepart + counter;

      // if (index >= fruits.length) {
      //   index = index - fruits.length; 
      // }
      let index = (indexDepart + counter) % fruits.length;

      smoothie.push(fruits[index]);
    }

    
    smoothie.forEach(function(fruit)  {
      let p = document.createElement("p");
      console.log(fruit);
      p.innerText = fruit;
      resultat.appendChild(p);
    });
    indexDepart++;
    let compteurhtml = document.getElementById("compteur");
    compteurhtml.innerText = "Preparation: " +indexDepart;

    if (smoothie.includes("kiwi magique")){
      resultat.style.backgroundColor = "green";
    } else {
      resultat.style.backgroundColor = "initial";
    }
	}

	// Fonction de reset
	function boireSmoothie() {
		// Ton code ici
  console.log("Boire smoothie");
 const resultat = document.getElementById("resultat");
 resultat.innerHTML = "";
	}