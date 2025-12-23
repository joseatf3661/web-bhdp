/**
 * Función para abrir WhatsApp con el número vigente
 */
function cotizarViaje(telefono) {
    const mensajeBase = "Hola Fernanda, vengo de la web BHDP.cl. Me gustaría cotizar un viaje:\n\n" + 
                        "📍 Origen:\n" + 
                        "🏁 Destino:\n" + 
                        "📅 Fecha:\n" + 
                        "👥 Pasajeros (Máx 44):";

    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensajeBase);
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});