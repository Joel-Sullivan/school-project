function loadSidebar() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar').innerHTML = data;
            // Initialize toggleNav after loading the sidebar
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

function toggleNav() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('show');
    } else {
        console.error("Element with ID 'sidebar' not found");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadSidebar(); // Call loadSidebar when the DOM is ready
});
