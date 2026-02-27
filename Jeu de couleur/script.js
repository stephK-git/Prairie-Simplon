// Sons
const sonFond = new Audio('Sleep Instantly Within 3 Minutes ♥ Sleep Music for Babies ♫ Mozart Brahms Lullaby [flJo10TDHcU].mp3');
sonFond.volume = 0.3;
sonFond.play().catch(e => console.log('Autoplay bloqué'));

// Son pour les mauvais choix
const sonErreur = new Audio('erreur.mp3');

const sons = {
    jaune: new Audio('Cloche de ring de boxe ,boxing ring bell sound effect #soundeffect #bruitage.mp3'),
    rouge: new Audio('Cloche de ring de boxe ,boxing ring bell sound effect #soundeffect #bruitage.mp3'),
    bleu: new Audio('Cloche de ring de boxe ,boxing ring bell sound effect #soundeffect #bruitage.mp3'),
    vert: new Audio('Cloche de ring de boxe ,boxing ring bell sound effect #soundeffect #bruitage.mp3')
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
            // Mélange simple des positions
            let parent = document.querySelector('.carres');
            let enfants = parent.children;
            
            // Prend chaque enfant et le met à une position aléatoire
            for(let i = 0; i < enfants.length; i++) {
                parent.appendChild(enfants[Math.floor(Math.random() * enfants.length)]);
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