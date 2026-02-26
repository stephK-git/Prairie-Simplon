function chercher() {
    let nomPays = document.getElementById("pays").value;

    fetch("https://restcountries.com/v3.1/name/" + nomPays)
    .then(res => res.json())
    .then(data => {
        let pays = data[0];
        document.getElementById("resultat").innerHTML = `
            <div class="card">
                <h3>${pays.name.common}</h3>
                Capitale : ${pays.capital}
                <br>Population : ${pays.population}
                <br>
                <img src="${pays.flags.png}">
            </div>
        `;
    })
    .catch(() => {
        document.getElementById("resultat").innerHTML = "Pays non trouvé";
    });
}