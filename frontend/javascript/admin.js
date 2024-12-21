// side nav functions
function openNav() {
    document.getElementById("mySidenav").style.width = "210px"; 
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; 
}

// notification bell functionality
document.addEventListener("DOMContentLoaded", function() {
    const bellIcon = document.querySelector('.h-bell');
    const notificationPanel = document.getElementById('notificationPanel');

    bellIcon.addEventListener('click', function() {
        if (notificationPanel.style.display === 'none' || notificationPanel.style.display === '') {
            notificationPanel.style.display = 'block';
        } else {
            notificationPanel.style.display = 'none';
        }
    });
});