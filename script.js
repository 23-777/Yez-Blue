// script.js
function showSection(sectionId) {
    // Ocultar todas las páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Mostrar la página solicitada
    const targetPage = document.getElementById(sectionId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0); // Subir al principio
    } else {
        console.error("Sección no encontrada:", sectionId);
    }
}

// Hacer que el script esté disponible globalmente
window.showSection = showSection;

// Mensaje de confirmación cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ Página cargada correctamente - Navegación lista");
});