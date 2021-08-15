const navSlide = () => {
    const menuToggle = document.querySelector('.menu_toggle input');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');

     menuToggle.addEventListener('click', () =>{
        nav.classList.toggle('slide');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
    })

    window.addEventListener('scroll', function() {
        let header = document.querySelector('nav');
        header.classList.toggle('scroll_active', window.scrollY > 100);
    })
}

navSlide();