        function changerTheme() {
            // Obtenez une couleur aléatoire
            let nouvelleCouleur = getRandomColor();

            // Changez la couleur de fond du corps (body)
            document.body.style.backgroundColor = nouvelleCouleur;

            // Affichez une alerte de bienvenue personnalisée
            let nomUtilisateur = prompt("Entrez votre nom:");
            if (nomUtilisateur) {
                alert("Bienvenue, " + nomUtilisateur + "!");
            }
        }

        function getRandomColor() {
            // Génère une couleur hexadécimale aléatoire
            let lettres = "0123456789ABCDEF";
            let couleur = "#";
            for (let i = 0; i < 6; i++) {
                couleur += lettres[Math.floor(Math.random() * 16)];
            }
            return couleur;
        }