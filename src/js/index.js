document.addEventListener('DOMContentLoaded', (event) => {
    alert('Bem-vindo ao Brothers Mídias!');
});

const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

document.querySelectorAll('a.link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        window.open(href, '_blank');
    });
});