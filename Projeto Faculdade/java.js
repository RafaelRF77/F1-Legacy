function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}
window.onload = function() {
    showSection('historia');
};