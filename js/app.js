





document.querySelector('.header__hamburger').addEventListener('click', function(){

    document.querySelector('.section-side').classList.add('navbar--open');
});

document.querySelector('.sidebar__toggle').addEventListener('click', function(){
   
    document.querySelector('.section-side').classList.remove('navbar--open');
});

