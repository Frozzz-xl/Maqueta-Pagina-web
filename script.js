// Animación de fade-in al hacer scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fade => {
  appearOnScroll.observe(fade);
});

// FORMULARIO DE CONTACTO SIMULADO
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    // Validación personalizada
    if (!name || !email || !phone || !subject || !service || !message) {
        formMsg.textContent = "Por favor completa todos los campos.";
        formMsg.className = "form-msg error";
        return;
    }

    // Simulación de envío (aquí iría fetch() si usas backend)
    setTimeout(() => {
        formMsg.textContent = "¡Mensaje enviado correctamente! Te responderé pronto.";
        formMsg.className = "form-msg success";

        document.getElementById("contactForm").reset();
    }, 600);
});
