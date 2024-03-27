let search = document.querySelector('.search-form');
let shopping = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let menu = document.querySelector('.navbar')
document.querySelector('#search-btn').onclick = () =>{
    console.log("hello")
    search.classList.toggle('active');
    shopping.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () =>{
    console.log("hello")
    shopping.classList.toggle('active');
    search.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () =>{
    console.log("hello")
    loginForm.classList.toggle('active');
    search.classList.remove('active');
    shopping.classList.remove('active');
    menu.classList.remove('active');

}

document.querySelector('#menu-btn').onclick = () =>{
    console.log("hello")
    menu.classList.toggle('active');
    search.classList.remove('active');
    shopping.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    search.classList.remove('active');
    shopping.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:1200,
        disableOnInterction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:1200,
        disableOnInterction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });