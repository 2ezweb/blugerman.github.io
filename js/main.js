$(function(){
  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(function(){
	const selectBtn = document.querySelectorAll(".sidebar__button");
  const selectBox = document.querySelectorAll(".sidebar__title");
    for(let i = 0; i < selectBtn.length; i++)
    {
        selectBtn[i].addEventListener('click', ()=>{              
            selectBtn[i].classList.toggle('opened');
            selectBox[i].classList.toggle('opened');
            if (selectBtn[i].classList.contains('opened')){
              selectBtn[i].innerHTML = '-';
            }
            else{
              selectBtn[i].innerHTML = '+';
            }
        });        
    }
});
$(function(){
	const selectBtn = document.querySelectorAll(".product-body__popup-button");
  const selectBox = document.querySelectorAll(".product-body__popup-row");
    for(let i = 0; i < selectBtn.length; i++)
    {
        selectBtn[i].addEventListener('click', ()=>{              
            selectBtn[i].classList.toggle('opened');
            selectBox[i].classList.toggle('opened');
            if (selectBtn[i].classList.contains('opened')){
              selectBtn[i].innerHTML = '-';
            }
            else{
              selectBtn[i].innerHTML = '+';
            }
        });        
    }
});

$(function(){
	const selectBtn = document.querySelectorAll(".sidebar__color-inner");
    for(let i = 0; i < selectBtn.length; i++)
    {
        selectBtn[i].addEventListener('click', ()=>{              
            selectBtn[i].classList.toggle('--active');
        });        
    }
});

$("body").on("click", ".header__menu-a", function() {
  $(".header__containers").slideToggle();
  $(".menu-mobile").slideToggle();
});

