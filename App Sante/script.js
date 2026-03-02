async function traduire(texte) {
    if (!texte) return texte;
    const morceaux = [];
    let restant = texte;
    while (restant.length > 0) {
        if (restant.length <= 500) { morceaux.push(restant); break; }
        let coupure = restant.lastIndexOf(' ', 500);
        if (coupure === -1) coupure = 500;
        morceaux.push(restant.substring(0, coupure));
        restant = restant.substring(coupure + 1);
    }
    const traduits = [];
    for (const morceau of morceaux) {
        try {
            const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(morceau)}&langpair=en|fr`);
            const data = await res.json();
            traduits.push(data.responseData?.translatedText || morceau);
        } catch {
            traduits.push(morceau);
        }
    }
    return traduits.join(' ');
}

async function chercher() {
    let medicament = document.getElementById("medicament").value.trim();
    
    if (!medicament) {
        document.getElementById("resultat").innerHTML = `
            <div class="card" style="text-align:center; color:#666;">
                 Tapez un nom de médicament
            </div>
        `;
        return;
    }

    document.getElementById("resultat").innerHTML = `<div class="card" style="text-align:center">Recherche en cours...</div>`;

    try {
        const res = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${medicament}"&limit=1`);
        if (!res.ok) throw new Error();
        const data = await res.json();

        let m = data.results[0];
        
        let nom = m.openfda?.brand_name?.[0] || medicament;
        nom = nom.replace(/Low Dose |Low-dose /g, "");

        const [indications, avertissements, contreIndications, effetsSecondaires] = await Promise.all([
            traduire(m.indications_and_usage?.[0] || ""),
            traduire(m.warnings?.[0] || ""),
            traduire(m.contraindications?.[0] || ""),
            traduire(m.adverse_reactions?.[0] || "")
        ]);
        
        document.getElementById("resultat").innerHTML = `
            <div class="card">
                <h2> ${nom}</h2>
                <p><strong> Nom générique:</strong> ${m.openfda?.generic_name?.[0] || "Non spécifié"}</p>
                <p><strong> Fabricant:</strong> ${m.openfda?.manufacturer_name?.[0] || "Non spécifié"}</p>
                <p><strong> Indications:</strong> ${indications || "Non disponible"}</p>
                <p><strong> Avertissements:</strong> ${avertissements || "Non spécifié"}</p>
                ${m.contraindications?.[0] ? `<p><strong> Contre-indications:</strong> ${contreIndications}</p>` : ''}
                ${m.adverse_reactions?.[0] ? `<p><strong> Effets secondaires:</strong> ${effetsSecondaires}</p>` : ''}
            </div>
        `;
    } catch {
        document.getElementById("resultat").innerHTML = `
            <div class="card" style="text-align:center; color:#c0392b;">
                 Médicament "${medicament}" non trouvé
            </div>
        `;
    }
}