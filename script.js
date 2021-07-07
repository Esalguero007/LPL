(() => {
    // Menu Control
    const nav = document.querySelector('nav')
    const burgers = document.querySelectorAll('.hamburger')
    burgers.forEach(burger => {
        burger.addEventListener('click', () => {
            nav.classList.toggle('opened')
        })
    })
    const navMobileLinks = document.querySelectorAll('.nav-links-mobile a')
    navMobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.toggle('opened')
        })
    })
    // Change Nav Background On Scroll
    const orderSection = document.querySelector('#order')
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            !entry.isIntersecting ? nav.classList.add('scrolled') : nav.classList.remove('scrolled')
            
        })
    })
    sectionObserver.observe(orderSection)
})();