// script.js - Version ultra simplifiée pour comprendre
document.addEventListener('DOMContentLoaded', function() {
    
    // Étape 1: Je récupère tous mes boutons
    let boutonOrange = document.querySelector('.btn-orange');
    let boutonBleu = document.querySelector('.btn-bleu');
    let boutonRouge = document.querySelector('.btn-rouge');
    let boutonVert = document.querySelector('.btn-vert');
    let boutonJaune = document.querySelector('.btn-jaune');
    let messageBox = document.getElementById('message-confirmation');
    
    // Étape 2: Je dis à chaque bouton quoi faire quand on clique
    
    // Pour le bouton ORANGE
    boutonOrange.onclick = function() {
        document.body.style.backgroundColor = 'orange';
        messageBox.innerHTML = "🍊 C'est orange! Le fond a changé!";
        messageBox.style.display = 'block';
    };
    
    // Pour le bouton BLEU
    boutonBleu.onclick = function() {
        document.body.style.backgroundColor = 'blue';
        messageBox.innerHTML = "💧 C'est bleu! Le fond a changé!";
        messageBox.style.display = 'block';
    };
    
    // Pour le bouton ROUGE
    boutonRouge.onclick = function() {
        document.body.style.backgroundColor = 'red';
        messageBox.innerHTML = "❤️ C'est rouge! Le fond a changé!";
        messageBox.style.display = 'block';
    };
    
    // Pour le bouton VERT
    boutonVert.onclick = function() {
        document.body.style.backgroundColor = 'green';
        messageBox.innerHTML = "🌿 C'est vert! Le fond a changé!";
        messageBox.style.display = 'block';
    };
    
    // Pour le bouton JAUNE
    boutonJaune.onclick = function() {
        document.body.style.backgroundColor = 'gold';
        messageBox.innerHTML = "⭐ C'est jaune! Le fond a changé!";
        messageBox.style.display = 'block';
    };
});