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


/*===== TABELA DE NÍVEIS (SKILLS) ======*/
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

/*===== ANIMAÇÃO DE ENTRADA (SCROLL) =====*/
const observador = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel')
      observador.unobserve(entry.target)
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('.work-card, .skills-card, .services-card, .habilidade-grupo').forEach(el => {
  el.classList.add('invisivel')
  observador.observe(el)
})