
// https://nouvelle-techno.fr/articles/on-cree-un-accordion-sans-framework
 

document.addEventListener('DOMContentLoaded', function() {
  const accordionBlocs = document.querySelectorAll(".accordion__bloc");

  accordionBlocs.forEach(bloc => {
    const title = bloc.querySelector(".accordion__title");
    const answerBloc = bloc.querySelector(".accordion__answer-bloc");
    const answer = bloc.querySelector(".accordion__answer");

    title.addEventListener("click", function() {
      // Ferme les autres accordéons ouverts
      accordionBlocs.forEach(otherBloc => {
        if (otherBloc !== bloc && otherBloc.classList.contains("active")) {
          otherBloc.classList.remove("active");
          otherBloc.querySelector(".accordion__answer-bloc").style.height = 0;
          otherBloc.querySelector(".caret").style.transform = ''; // Réinitialise la rotation de la flèche
        }
      });

      // Ouvre/ferme l'accordéon actuel
      bloc.classList.toggle("active");

      if (bloc.classList.contains("active")) {
        answerBloc.style.height = answer.offsetHeight + "px";
        bloc.querySelector(".caret").style.transform = 'rotate(-180deg)'; // Tourne la flèche
      } else {
        answerBloc.style.height = 0;
        bloc.querySelector(".caret").style.transform = ''; // Réinitialise la rotation de la flèche
      }
    });
  });

  // Gestion de l'accordéon actif au chargement de la page (si vous en avez un avec la classe "active")
  const firstActiveBloc = document.querySelector(".accordion__bloc.active");
  if (firstActiveBloc) {
    const firstActiveAnswer = firstActiveBloc.querySelector(".accordion__answer");
    firstActiveBloc.querySelector(".accordion__answer-bloc").style.height = firstActiveAnswer.offsetHeight + "px";
    firstActiveBloc.querySelector(".caret").style.transform = 'rotate(-180deg)'; // Tourne la flèche de l'élément actif au chargement
  }
});