// Les variable et leur valeurs
let arachides = "Cacahuètes, huile, pâte à tartiner, sauces, biscuits";
let gluten = "Blé, orge, seigle, pain, pâtes";
let lactose = "Lait, fromage, yaourt, crème, beurre";
let oeufs = "Oeufs, mayonnaise, pâtisseries, pâtes, sauces";

// Récupérer les éléments
const searchBar = document.getElementById('searchBar');
const allergiesList = document.getElementById('allergiesList');
const result = document.getElementById('result');

// Afficher la liste quand on clic
searchBar.onclick = function() {
    allergiesList.innerHTML = 
        "<li onclick='choisirArachides()'>Arachides</li>" +
        "<li onclick='choisirGluten()'>Gluten</li>" +
        "<li onclick='choisirLactose()'>Lactose</li>" +
        "<li onclick='choisirOeufs()'>Œufs</li>";
    allergiesList.style.display = "block";
};

// Fonctions de l'action de chaque allergie
function choisirArachides() {
    searchBar.value = "Arachides";
    result.innerHTML = "<strong>Arachides :</strong><br>Aliment à éviter : " + arachides + "<br> <br> <strong>Pourquoi? :</strong><br> Les protéines de l'arachide sont extrêmement stables et ne sont pas détruites par la chaleur (torréfaction). Elles déclenchent des réactions très rapides et violentes, souvent respiratoires (asthme sévère) ou cardiaques, car le système immunitaire les identifie comme une agression massive immédiate.";
    result.style.display = "block";
    allergiesList.style.display = "none";
}

function choisirGluten() {
    searchBar.value = "Gluten";
    result.innerHTML = "<strong>Gluten :</strong><br>Aliment à éviter : " + gluten + "<br> <br> <strong>Pourquoi? :</strong><br> Le gluten est une protéine présente dans certaines céréales (blé, orge, seigle). Chez les personnes atteintes de la maladie cœliaque, le gluten provoque une réaction immunitaire qui endommage la paroi de l'intestin grêle, entraînant des symptômes digestifs et une malabsorption des nutriments."; 
    result.style.display = "block";
    allergiesList.style.display = "none";
}

function choisirLactose() {
    searchBar.value = "Lactose";
    result.innerHTML = "<strong>Lactose :</strong><br>Aliment à éviter : " + lactose + "<br> <br> <strong>Pourquoi? :</strong><br> Le lactose est un sucre présent dans le lait et les produits laitiers. Les personnes intolérantes au lactose manquent de lactase, l'enzyme nécessaire pour digérer le lactose, ce qui entraîne des symptômes tels que ballonnements, diarrhée et douleurs abdominales après la consommation de produits laitiers.";
    result.style.display = "block";
    allergiesList.style.display = "none";
}

function choisirOeufs() {
    searchBar.value = "Œufs";
    result.innerHTML = "<strong>Œufs :</strong><br>Aliment à éviter : " + oeufs + "<br> <br> <strong>Pourquoi? :</strong><br> Les allergies aux œufs sont causées par une réaction du système immunitaire aux protéines présentes dans les œufs, principalement dans le blanc. Les symptômes peuvent inclure des réactions cutanées, des troubles digestifs et, dans les cas graves, des réactions anaphylactiques.";
    result.style.display = "block";
    allergiesList.style.display = "none";
}