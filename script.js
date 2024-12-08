
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