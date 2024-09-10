# Adaptive Serving Network Aware Demo

Delivering different assets based on the quality of the user's network connection

---

Ce projet est une démonstration d'adaptive serving en fonction du type de connexion réseau, utilisant l'API Network Information de JavaScript. Le but est de charger dynamiquement un contenu adapté à la bande passante ou au statut hors ligne de l'utilisateur pour améliorer l'expérience utilisateur, tout en tenant compte des principes de **GreenIT**, de **Digital Sustainability**, et de **Low-Energy Web Development**.

## 🚀 Fonctionnalités

- **Détection du type de connexion réseau** : 2G, 3G, 4G, Wi-Fi, Ethernet.
- **Contenu adapté** : Le contenu haute ou basse résolution est servi en fonction de la qualité de la connexion.
- **Gestion du statut hors ligne** : Un contenu spécifique est affiché lorsque l'utilisateur est hors ligne.
- **Responsive** et optimisé pour une consommation énergétique réduite grâce à l'adaptive serving.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé ou configuré les éléments suivants sur votre machine :

- **Node.js** (version 12 ou supérieure)
- Un navigateur supportant l'API **Network Information** :
  - Chrome 61+ (Desktop et Mobile)
  - Edge 79+
  - Opera 47+

> ⚠️ **Note importante** : L'API Network Information n'est pas supportée sur **Safari** (iOS) et **Firefox Android**.

## 🔧 Installation

1. **Clonez le dépôt :**

   ```bash
   git clone [repository]
   ```

2. **Accédez au répertoire du projet :**

3. **Installez les dépendances (si nécessaire) :**

   ```bash
   pnpm install
   ```

4. **Lancez le serveur de développement :**

   Vous pouvez utiliser un serveur local pour servir le projet. Si vous avez `live-server` installé, lancez simplement :

   ```bash
   live-server
   ```

   Sinon, vous pouvez installer `http-server` :

   ```bash
   npm install -g http-server
   http-server
   ```

5. **Ouvrez votre navigateur :**

   Visitez l'URL fournie (en général `http://localhost:8080`) et testez la démo.

## 🖥️ Démonstration

Lorsque vous chargez la page, le type de connexion est détecté automatiquement et un contenu approprié est affiché. Utilisez l'inspecteur dans les outils de développement pour modifier le type de connexion et voir comment le contenu s'adapte.

- **4G / Wi-Fi** : Affichage du contenu en haute résolution.
- **3G** : Affichage du contenu en basse résolution.
- **2G / slow-2G** : Affichage du contenu très basse résolution pour minimiser l'utilisation des données.
- **Hors ligne** : Affichage d'un contenu simplifié pour les utilisateurs déconnectés.

## 📚 Ressources et documentation

Voici des ressources utiles pour mieux comprendre l'API Network Information et le concept d'adaptive serving :

- [MDN Web Docs - Network Information API](https://developer.mozilla.org/fr/docs/Web/API/Network_Information_API)
- [Google Developers - Network Information API](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/network-information)
- [W3C Specification for Network Information API](https://www.w3.org/TR/netinfo/)

### Articles sur l'optimisation de contenu adaptatif :

- [Low-Energy Web Development - A Guide](https://www.lowtechmagazine.com)
- [Adaptive Serving for Sustainable Web Design](https://www.greenit.fr)

## 🛠️ Contribution

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, suivez les étapes suivantes :

1. Fork le projet
2. Créez une nouvelle branche (`git checkout -b feature/Amélioration`)
3. Faites vos modifications
4. Créez une Pull Request

## 📜 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
