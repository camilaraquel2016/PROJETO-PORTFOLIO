/*===== MENU SANDUÍCHE =====*/
const navMenu = document.getElementById('nav-menu')
const navAbrir = document.getElementById('nav-abrir')
const navFechar = document.getElementById('nav-fechar')

if (navAbrir) {
    navAbrir.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navFechar) {
    navFechar.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
})