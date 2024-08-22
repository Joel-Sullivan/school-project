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
  function loadSidebar() {
      fetch('sidebar.html')
          .then(response => response.text())
          .then(data => {
              var sidebarContainer = document.getElementById('sidebar');
              sidebarContainer.innerHTML = '';
              sidebarContainer.innerHTML = data;

              var menuButton = document.getElementById('navbtn');
              if (menuButton) {
                  menuButton.addEventListener('click', toggleNav);
              }

              var closeButton = document.querySelector('.closebtn');
              if (closeButton) {
                  closeButton.addEventListener('click', toggleNav);
              }
          })
          .catch(error => console.error('Error loading sidebar:', error));
  }

  loadSidebar(); // Load sidebar when DOM content is loaded

  // Theme Toggle Function
  function toggleTheme() {
      document.documentElement.classList.toggle('dark-theme');
  }

  // Attach the toggleTheme function to the button
  var themeToggleButton = document.getElementById('theme-toggle');
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
  }
});
