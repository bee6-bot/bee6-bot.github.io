function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'none' || dropdownContent.style.display === '' ? 'block' : 'none';
}

// If the screen is resized and is less than 768px, hide the dropdown menu
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) return;
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
});

// For each a in the .bottom__bar
const bottomBarLinks = document.querySelectorAll('.bottom__bar a');
bottomBarLinks.forEach((link) => {
    // 250ms delay
    setTimeout(() => {

    const currentLocation = window.location.href.split('?')[0];
    if (link.href === currentLocation) link.classList.add('active');
    }, 250);
});