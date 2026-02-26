// Sons
const sonFond = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');
sonFond.volume = 0.3;
sonFond.play().catch(e => console.log('Autoplay bloqué'));

// Son pour les mauvais choix
const sonErreur = new Audio('https://www.soundjay.com/misc/sounds/fail-buzzer-01.mp3');

const sons = {
    jaune: new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-02.mp3'),
    rouge: new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-03.mp3'),
    bleu: new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-04.mp3'),
    vert: new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3')
};

// Variables du jeu
let couleurs = ['jaune', 'rouge', 'bleu', 'vert'];
let aTrouver = couleurs[Math.floor(Math.random() * 4)];

const spanCouleur = document.getElementById('couleurADeviner');
const message = document.getElementById('message');
const carres = document.querySelectorAll('.carre');
const jeu = document.querySelector('.jeu');

spanCouleur.textContent = aTrouver;

// Ajout du clic sur chaque carré
carres.forEach(carre => {
    carre.onclick = function() {
        let couleurCliquee = this.dataset.couleur;
        
        if (couleurCliquee === aTrouver) {
            // Bonne réponse
            sons[couleurCliquee].play();
            
            this.style.display = 'none';
            message.innerHTML = '<span class="success"> Félicitation tu as trouvé !</span>';
            
            couleurs = couleurs.filter(c => c !== aTrouver);
            
            if (couleurs.length > 0) {
                // Mélange aléatoire des positions
                let parent = document.querySelector('.carres');
                for (let i = parent.children.length; i >= 0; i--) {
                    parent.appendChild(parent.children[Math.random() * i | 0]);
                }
                
                aTrouver = couleurs[Math.floor(Math.random() * couleurs.length)];
                spanCouleur.textContent = aTrouver;
            } else {
                message.innerHTML = '<span class="success"> BRAVO ! Toutes les couleurs sont trouvées !</span>';
                spanCouleur.textContent = ' FIN';
            }
        } else {
            // Mauvaise réponse - son d'erreur
            sonErreur.play();
            
            jeu.classList.add('flash');
            setTimeout(() => jeu.classList.remove('flash'), 300);
            message.innerHTML = '<span class="error"> Oups! Mauvais choix, réessaye</span>';
        }
    };
});

function resetJeu() {
    couleurs = ['jaune', 'rouge', 'bleu', 'vert'];
    aTrouver = couleurs[Math.floor(Math.random() * 4)];
    spanCouleur.textContent = aTrouver;
    message.innerHTML = 'Clique sur une couleur !';
    
    carres.forEach(carre => {
        carre.style.display = 'block';
    });
}