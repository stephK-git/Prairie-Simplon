// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les boutons
    const boutons = document.querySelectorAll('.zone-boutton button');
    
    // Sélectionner la zone de message
    const messageBox = document.getElementById('message-confirmation');
    
    // Ajouter un écouteur de clic à chaque bouton
    boutons.forEach(bouton => {
        bouton.addEventListener('click', function() {
            
            // 1️⃣ D'ABORD : Changer la couleur du fond
            if (this.classList.contains('btn-orange')) {
                document.body.style.backgroundColor = 'orange';
                // ENSUITE : Afficher le message avec la bonne couleur
                messageBox.innerHTML = " Tu as vu? le fond est devenu <strong style='color: orange;'>ORANGE</strong>! <br> Ce qui veut dire que le script pour le changement de couleur fonctionne.";
            }
            else if (this.classList.contains('btn-bleu')) {
                document.body.style.backgroundColor = 'blue';
                messageBox.innerHTML = " Tu as vu? le fond est devenu <strong style='color: blue;'>BLEU</strong>! <br> Ce qui veut dire que le script pour le changement de couleur fonctionne.";
            }
            else if (this.classList.contains('btn-rouge')) {
                document.body.style.backgroundColor = 'red';
                messageBox.innerHTML = " Tu as vu? le fond est devenu <strong style='color: red;'>ROUGE</strong>! <br> Ce qui veut dire que le script pour le changement de couleur fonctionne.";
            }
            else if (this.classList.contains('btn-vert')) {
                document.body.style.backgroundColor = 'green';
                messageBox.innerHTML = " Tu as vu? le fond est devenu <strong style='color: green;'>VERT</strong>! <br> Ce qui veut dire que le script pour le changement de couleur fonctionne.";
            }
            else if (this.classList.contains('btn-jaune')) {
                document.body.style.backgroundColor = 'yellow';
                messageBox.innerHTML = " Tu as vu? le fond est devenu <strong style='color: #B8860B;'>JAUNE</strong>! <br> Ce qui veut dire que le script pour le changement de couleur fonctionne.";
            }
            
            // Afficher le message (ajouter la classe visible)
            messageBox.classList.add('visible');
        });
    });
});