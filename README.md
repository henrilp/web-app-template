
CONTEXTE D'INSTALLATION :

- version de node.js à jour
- un IDE (Sublime Text)

INSTALLATION (en ligne de commande) :

- créer un dossier quelque part pour mettre le projet.
- Se mettre dans le dossier en terminal
- git clone https://github.com/PierreLePage98/ECE_amazon_128
- cd ECE_amazon_128
- npm install
- npm start

PRINCIPE :

Se placer dans le dossier.
Dans un terminal, "npm start"
Dans l'autre, "node server.js"

Côté front, on utilise **axios** pour faire des requêtes GET,POST etc
Côté back, on récupère ces requêtes dans server.js, on fait le traitement nécessaire avec la base de donnée en sql, puis on renvoit la donnée.
