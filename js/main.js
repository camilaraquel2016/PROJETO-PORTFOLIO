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


/*=============== TABELA DE NÍVEIS (SKILLS) ===============*/
document.querySelectorAll('.btn-tabela').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.skills-card')
    card.classList.toggle('show-table')

    const icone = btn.querySelector('i')
    
    if (card.classList.contains('show-table')) {
      icone.className = 'ri-close-line'
    } else {
      icone.className = 'ri-table-line'
    }
  })
})