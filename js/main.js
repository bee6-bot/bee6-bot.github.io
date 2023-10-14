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

// FInd the link that matches the current page and add the active class
const lastPage = window.location.search.split('?lastPage=')[1];
if (lastPage) {
    bottomBarLinks.forEach((link) => { if (link.href.split('?')[0] === lastPage) link.classList.add('active'); });
}

bottomBarLinks.forEach((link) => {
    const currentLocation = window.location.href.split('?')[0];
    link.href = `${link.href}?lastPage=${currentLocation}`;

    setTimeout(() => {
        if (link.href.split('?')[0] === currentLocation) {
            bottomBarLinks.forEach((link) => link.classList.remove('active'));
            link.classList.add('active');
        }
    }, 250);
});