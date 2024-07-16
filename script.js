document.addEventListener('DOMContentLoaded', function() {
  // Gestion de l'envoi du formulaire de contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Empêche le comportement par défaut du formulaire

          // Récupération des valeurs des champs
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          // Stockage des données dans le localStorage
          localStorage.setItem('contactName', name);
          localStorage.setItem('contactEmail', email);
          localStorage.setItem('contactMessage', message);

          // Redirection vers private.html
          window.location.href = 'private.html';
      });
  }

  // Gestion de la connexion et de l'affichage des données privées
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Empêche le comportement par défaut du formulaire

          // Récupération des valeurs des champs
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;

          // Vérification des identifiants
          if (username === 'dadd' && password === 'daddad') {
              // Masquer le formulaire de connexion
              loginForm.style.display = 'none';

              // Affichage des données de contact
              const privateDataSection = document.getElementById('private-data');
              privateDataSection.style.display = 'block';

              // Récupération des données depuis le localStorage et affichage
              const contactName = localStorage.getItem('contactName');
              const contactEmail = localStorage.getItem('contactEmail');
              const contactMessage = localStorage.getItem('contactMessage');

              document.getElementById('contact-name').textContent = contactName;
              document.getElementById('contact-email').textContent = contactEmail;
              document.getElementById('contact-message').textContent = contactMessage;

              // Garder les données dans le localStorage jusqu'à ce que l'utilisateur décide de les supprimer
          } else {
              alert('Identifiants incorrects. Veuillez réessayer.');
          }
      });
  }
});


window.addEventListener('resize', function() {
  var windowHeight = window.innerHeight;
  document.querySelectorAll('.bg-image').forEach(function(element) {
      element.style.height = windowHeight + 'px';
  });
});

// Appeler la fonction pour ajuster la hauteur initiale
window.dispatchEvent(new Event('resize'));
