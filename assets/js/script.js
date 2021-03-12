const nav = document.getElementById('nav_menu');
const navLink = document.querySelectorAll('.navLink');
const header = document.getElementById('header');
const scrolltop = document.getElementById('scroll_top');
const sections = document.querySelectorAll('section[id]');

// Show Menu
const showMenu = () => {
    const alt = document.getElementById('nav_alt');

    if (alt && nav){
        alt.addEventListener('click', () => {
            nav.classList.toggle('show_menu')
        })
    }
}
showMenu();

function actionLink(){
    nav.classList.remove('show_menu')
}

navLink.forEach(n => n.addEventListener('click', actionLink));

// Scroll Link Active
function scrollActive(){
    const scrolly = window.pageYOffset;

    sections.forEach(c => {
        const divHeight = c.offsetHeight;
        const divTop = c.offsetTop - 100;
        let = sectionId = c.getAttribute('id');

        if (scrolly > divTop && scrolly <= divTop + divHeight){
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.add('active_link')
        }else{
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}

window.addEventListener('scroll', scrollActive);

// Scroll Header
function scrollHeader(){
    if(this.scrollY >= 200){
        header.classList.add('scroll_header')
    }else{
        header.classList.remove('scroll_header')
    }
}

window.addEventListener('scroll', scrollHeader);


function scrollTop(){
    if(this.scrollY >= 560){
        scrolltop.classList.add('scroll_top')
    }else{
        scrolltop.classList.remove('scroll_top')
    }
}

window.addEventListener('scroll', scrollTop);

