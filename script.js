
const links = document.querySelectorAll("nav a");
console.log(links)

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth' });
    })
})

// Wybieramy formularz
const form = document.getElementById('contact-form');

// Obsługa zdarzenia submit
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Zapobiega domyślnemu wysyłaniu formularza

    // Pobieramy wartości pól
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Prosta walidacja
    if (!name || !email || !message) {
        alert('Proszę wypełnić wszystkie pola!');
        return;
    }

    // Wyświetlenie komunikatu o powodzeniu
    alert(`Dziękujemy za wiadomość, ${name}! Skontaktujemy się z Tobą wkrótce.`);
    
    // Opcjonalnie: Resetowanie formularza
    form.reset();
});
