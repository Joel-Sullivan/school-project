document.addEventListener('DOMContentLoaded', function() {
  // Toggle Navigation Function
  function toggleNav() {
      var sidebar = document.getElementById('sidebar');
      if (sidebar) {
          sidebar.classList.toggle('show');
      } else {
          console.error("Element with ID 'sidebar' not found");
      }
  }

  // Load Sidebar Function
  function loadTools() {
      fetch('tools.html')
          .then(response => response.text())
          .then(data => {
              var headContainer = document.getElementById('tools');
              headContainer.innerHTML = data;

              var menuButton = document.getElementById('navbtn');
              if (menuButton) {
                  menuButton.addEventListener('click', toggleNav);
              }

              var closeButton = document.querySelector('.closebtn');
              if (closeButton) {
                  closeButton.addEventListener('click', toggleNav);
              }
          })
          .catch(error => console.error('Error loading Navbar + Pagehead:', error));
  }

  loadTools(); // Load sidebar when DOM content is loaded

  //Themes
    function applyTheme(themeName) {
          document.documentElement.className = themeName;
            if (themeName === 'stephanie-theme' || themeName === 'sportacus-theme' || themeName === 'robbie-rotten-theme') {
          document.body.style.backgroundImage = 'var(--bg-image)';
          document.body.style.backgroundColor = ''; // Clear background color
        } else {
          document.body.style.backgroundColor = 'var(--bg-color)';
          document.body.style.backgroundImage = ''; // Clear background image
        }
      }

    function saveTheme(themeName) {
        localStorage.setItem('theme', themeName);
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            applyTheme(savedTheme);
        }
    }

    loadTheme();

    const themeButtons = document.querySelectorAll('[data-theme]');
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedTheme = this.getAttribute('data-theme');
            applyTheme(selectedTheme);
            saveTheme(selectedTheme);
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
      const toggleMenuButton = document.querySelector('.toggle-menu');
      const themeMenu = document.querySelector('.theme-menu');
      const closeMenuButton = document.querySelector('.close-menu');
  
      toggleMenuButton.addEventListener('click', () => {
          themeMenu.classList.toggle('active');
      });
  
      closeMenuButton.addEventListener('click', () => {
          themeMenu.classList.remove('active');
      });
  });
});
