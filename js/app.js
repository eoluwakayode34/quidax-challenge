





document.querySelector('.header__hamburger').addEventListener('click', function(){


    document.querySelector('.section-side').classList.add('navbar--open');
});

document.querySelector('.sidebar__toggle').addEventListener('click', function(){
   
    document.querySelector('.section-side').classList.remove('navbar--open');
});


document.querySelector('.search-toggle').addEventListener('click', function(){
    document.querySelector('.user-nav-search ').style.display = 'none';
    document.querySelector('.user-nav-book ').style.display = 'none';
    document.querySelector('.user-nav__notification ').style.display = 'none';
    document.querySelector('.user-nav__img-box').style.display = 'none';

    document.querySelector('.logo-box').style.display = 'none';
    // document.querySelector('.search').style.display= 'flex';
    // document.querySelector('.search').style.opacity= '1';

    document.querySelector('.search').classList.add('search-bar-open');

});

document.querySelector('.search__toggle').addEventListener('click', function(){
    document.querySelector('.user-nav-search ').style.display = 'flex';
    document.querySelector('.user-nav-book ').style.display = 'flex';
    document.querySelector('.user-nav__notification ').style.display = 'flex';
    document.querySelector('.user-nav__img-box').style.display = 'flex';

    document.querySelector('.logo-box').style.display = 'flex';
    // document.querySelector('.search').style.display= 'flex';
    // document.querySelector('.search').style.opacity= '1';

    document.querySelector('.search').classList.remove('search-bar-open');

})


// carousel for mobile

document.querySelector('.mobile-featured-book').addEventListener('click', function(){

   document.querySelector('.books-details').classList.toggle('mobile-featured-book-toggle');
})

