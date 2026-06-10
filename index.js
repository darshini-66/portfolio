
/* MOBILE MENU */

const hamburger =
document.getElementById('hamburger');

const mobileMenu =
document.getElementById('mobileMenu');

hamburger.addEventListener('click',()=>{

mobileMenu.classList.toggle('active');

});

/* CLOSE MENU WHEN LINK CLICKED */

document
.querySelectorAll('.mobile-menu a')
.forEach(link=>{

link.addEventListener('click',()=>{

mobileMenu.classList.remove('active');

});

});

/* SCROLL REVEAL */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

},{
threshold:0.15
});

document
.querySelectorAll('.fade-up')
.forEach(el=>{

observer.observe(el);

});

/* STAGGER POLAROIDS */

const polaroids =
document.querySelectorAll('.polaroid');

polaroids.forEach((card,index)=>{

card.style.transitionDelay =
`${index * 0.15}s`;

});

/* CONTACT FORM */


form.reset();

});
