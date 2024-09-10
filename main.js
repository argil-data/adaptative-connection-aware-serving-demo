import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
	const connection =
		navigator.connection ||
		navigator.mozConnection ||
		navigator.webkitConnection;

	// Fonction pour charger du contenu en fonction de la connexion réseau ou du statut hors ligne
	function loadContentBasedOnConnection() {
		const contentElement = document.getElementById("dynamic-content");
		const connectionTypeElement = document.getElementById("connection-type");
		const messageElement = document.getElementById("message");

		// Vérifier si l'utilisateur est hors ligne
		if (!navigator.onLine) {
			displayOfflineContent();
			return;
		}

		if (connection) {
			const connectionType = connection.effectiveType;

			connectionTypeElement.innerText = connectionType;
			messageElement.className = ""; // Réinitialiser les classes

			let contentHTML = "";
			let messageClass = "";

			// Adapter le contenu en fonction du type de connexion
			switch (connectionType) {
				case "4g":
				case "wifi":
					contentHTML = `
                        <div class="dynamic-res high-res">
                            <h2>Contenu haute résolution</h2>
                            <img class="res-img" src="./high-res-image.jpg" alt="Image haute résolution">
                            <p>Votre connexion est rapide. Vous pouvez profiter de contenu de haute qualité.</p>
                        </div>`;
					messageClass = "high-res";
					break;
				case "3g":
					contentHTML = `
                        <div class="dynamic-res low-res">
                            <h2>Contenu basse résolution</h2>
                            <img class="res-img" src="./low-res-image.jpg" alt="Image basse résolution">
                            <p>Votre connexion est lente. Contenu adapté pour économiser des données.</p>
                        </div>`;
					messageClass = "low-res";
					break;
				case "2g":
				case "slow-2g":
					contentHTML = `
                        <div class="dynamic-res off-res">
                            <h2>Contenu très basse résolution</h2>
                            <img class="res-img" src="./javascript.svg" alt="Image vectorielle très basse résolution">
                            <p>Votre connexion est très lente. Contenu optimisé pour minimiser les données.</p>
                        </div>`;
					messageClass = "off-res";
					break;
				default:
					contentHTML = `
                        <div>
                            <h2>Contenu standard</h2>
                            <p>Connexion stable. Contenu standard chargé.</p>
                        </div>`;
					break;
			}

			contentElement.innerHTML = contentHTML;
			messageElement.classList.add(messageClass);

			// Mise à jour du contenu lorsque la connexion change
			connection.addEventListener("change", loadContentBasedOnConnection);
		} else {
			connectionTypeElement.innerText =
				"API Network Information non disponible";
			contentElement.innerHTML = `
                <div>
                    <h2>Contenu par défaut</h2>
                    <p>Votre navigateur ne supporte pas l'API Network Information. Contenu par défaut affiché.</p>
                </div>`;
		}
	}

	// Fonction pour afficher le contenu hors ligne
	function displayOfflineContent() {
		const contentElement = document.getElementById("dynamic-content");
		const connectionTypeElement = document.getElementById("connection-type");
		const messageElement = document.getElementById("message");

		connectionTypeElement.innerText = "Hors ligne";
		contentElement.innerHTML = `
            <div class="offline-content">
                <h2>Contenu hors ligne</h2>
                <p>Vous êtes actuellement hors ligne. Contenu limité disponible.</p>
            </div>`;
		messageElement.className = ""; // Réinitialiser les classes
	}

	// Gestion du statut hors ligne / en ligne
	function handleOfflineStatus() {
		if (!navigator.onLine) {
			displayOfflineContent();
		} else {
			loadContentBasedOnConnection();
		}
	}

	// Initialisation des événements
	window.addEventListener("load", handleOfflineStatus);
	window.addEventListener("online", handleOfflineStatus);
	window.addEventListener("offline", handleOfflineStatus);

	if (connection) {
		connection.addEventListener("change", handleOfflineStatus);
	} else {
		document.querySelector(".warning").textContent =
			"Note : L'API Network Information n'est pas disponible dans ce navigateur.";
	}
});
