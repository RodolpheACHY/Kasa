# 🏡 projet Kasa — Application de location immobilière (React & React Router)

Kasa est une application front-end développée avec **React**, **React Router** et **SASS**, permettant d’afficher des annonces de logements de manière dynamique.  
L’objectif du projet était de reproduire fidèlement les maquettes Figma et de construire une interface fluide, moderne et responsive.

---

## Mission
- Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !)

### Contraintes fonctionnelles
- Pour le défilement des photos dans la galerie (composant Gallery) : Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer. Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

---

## 🚀 Fonctionnalités principales

- 🔹 Navigation dynamique avec **React Router**
- 🔹 Composants React réutilisables et modulaires
- 🔹 Gestion des données via un **fichier JSON**
- 🔹 Animations CSS et transitions douces
- 🔹 Design responsive conforme aux maquettes desktop & mobile
- 🔹 Projet initialisé avec **Vite** pour un environnement performant

---

## 🛠️ Technologies utilisées

- **React**
- **React Router**
- **SASS / CSS3**
- **Vite**
- **Node.js**
- **Figma** (maquettes)

---

## 📂 Structure du projet

```
/
│── README.md
│── .vscode
└── my-react-app/
       │── src/
       |    ├── assets/
       |    ├── components/
       |    |      ├── card/
       |    |      ├── caroussel/
       |    |      ├── collapse/
       |    |      ├── footer/
       |    |      ├── header/
       |    |      ├── hero/
       |    |      ├── locations/
       |    |      ├── locationDetails/
       |    |      └── ... 
       |    ├── data/
       |    ├── pages/
       |    ├── styles/
       |    ├── App.jsx
       |    ├── index.css
       |    └── main.jsx
       │── public/
       │── README.md
       │── eslint.config.js
       │── index.html
       │── package-lock.json
       │── vite.config.js
       └── package.json
```

---

## 📸 Aperçu

<img width="1866" height="942" alt="image" src="https://github.com/user-attachments/assets/12c6d5e2-b3f2-40e4-ae84-a4c0eee27944" />

---

## 🔧 Installation & utilisation

Clone le projet :

```
git clone https://github.com/ton-repo/kasa.git
cd kasa
```

Installe les dépendances :
```
npm install
```

Lance le projet :
```
npm start
```

📬 Contact
Pour toute question ou collaboration :
```
Email : rod23_reseaux@yahoo.fr
Portfolio : en cours
```
