function calculs() {
    // on récupère l'année en cours
    date_actuelle = new Date();
    let annee_en_cours = date_actuelle.getFullYear();
    // on récupère la date entrée
    let date_naissance = document.getElementById("date").value;
    // on vérifie que le champ n'est pas vide
    if(date_naissance == "") {
        alert("vous devez entrer une date pour effectuer le calcul");
    }
    // si ce n'est pas vide on calcule la catégorie
    else {
        // on isole l'année de la date de naissance
        let annee_naissance = date_naissance
        
        // .substr(6,4)
        // on calcule la différence entre l'année en cours et l'année de naissance
        let age = annee_en_cours-annee_naissance;
        // on en déduit la catégorie sportive
        let catego = ""

        if (age < 16)
        {
            catego = "too young";
        }
        if (age >= 17 && age <= 19)
        {
            catego = "Junior";
        }
        else if (age > 19 && age <= 22)
        {
            catego = "Espoir";
        }
        else if (age > 22 && age <= 39)
        {
            catego = "Sénior";
        }
        else if (age > 39)
        {
            catego = "Vétéran";
        }


        // on les affiche dans les bonnes div
        document.getElementById('macatego').innerHTML = catego;
        // on affiche la div de réponse
        document.getElementById('reponse').style.visibility="visible";
    }

    console.log(macatego);
}