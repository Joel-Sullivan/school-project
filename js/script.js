document.addEventListener('DOMContentLoaded', function() {
  function toggleNav() {
    var sidebar = document.getElementById('sidebar');
    console.log(document.getElementById('sidebar'));
    if (sidebar) {
        sidebar.classList.toggle('show');
    } else {
        console.error("Element with ID 'sidebar' not found");
    }
  }



  var menuButton = document.getElementById('navbtn');
  if (menuButton) {
      menuButton.addEventListener('click', toggleNav);
  }
  
  var closeButton = document.querySelector('.closebtn');
    if (closeButton) {
        closeButton.addEventListener('click', toggleNav);
    }
});

function loadSidebar() {
  fetch('sidebar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('sidebar-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading sidebar:', error));
}