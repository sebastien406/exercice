

const likeButton = document . getElementById ( 'likeButton' ); 
const likeCount = document . getElementById ( 'likeCount' ); 
let likes = 0 ; 
let message = "Vous aimez vraiment cet article !";
let espace = document.createElement("messageAjouter");
document.body.appendChild(espace);

likeButton. addEventListener ( 'click' , () => { 
 likes++; 
  likeCount. innerText = likes; 
  console.log(likes);
 afficheMessage();
});
function afficheMessage(){
  if(likes === 5) {
   espace.innerText = message;
 }
  };
