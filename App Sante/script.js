function chercher() {
    let medicament = document.getElementById("medicament").value.trim();
    
    if (!medicament) {
        document.getElementById("resultat").innerHTML = `
            <div class="card" style="text-align:center; color:#666;">
                 Tapez un nom de médicament
            </div>
        `;
        return;
    }

    document.getElementById("resultat").innerHTML = `<div class="card" style="text-align:center">⏳ Recherche en cours...</div>`;

    fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${medicament}"&limit=1`)
    .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
    })
    .then(data => {
        let m = data.results[0];
        
        // NETTOYAGE DU NOM (enlève "Low Dose")
        let nom = m.openfda?.brand_name?.[0] || medicament;
        nom = nom.replace(/Low Dose |Low-dose /g, "");
        
        document.getElementById("resultat").innerHTML = `
            <div class="card">
                <h2> ${nom}</h2>
                <p><strong> Nom générique:</strong> ${m.openfda?.generic_name?.[0] || "Non spécifié"}</p>
                <p><strong> Fabricant:</strong> ${m.openfda?.manufacturer_name?.[0] || "Non spécifié"}</p>
                <p><strong> Indications:</strong> ${m.indications_and_usage?.[0] || "Non disponible"}</p>
                <p><strong> Avertissements:</strong> ${m.warnings?.[0] || "Non spécifié"}</p>
                ${m.contraindications?.[0] ? `<p><strong> Contre-indications:</strong> ${m.contraindications[0]}</p>` : ''}
                ${m.adverse_reactions?.[0] ? `<p><strong> Effets secondaires:</strong> ${m.adverse_reactions[0]}</p>` : ''}
            </div>
        `;
    })
    .catch(() => {
        document.getElementById("resultat").innerHTML = `
            <div class="card" style="text-align:center; color:#c0392b;">
                 Médicament "${medicament}" non trouvé
            </div>
        `;
    });
}