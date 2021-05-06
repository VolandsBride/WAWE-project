$(function () {
  $(".nav a, .go-top").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1300);
  });

  $(".blog__slider").slick({
    dots: true,
    arrows: false
  })

   $('.nav__btn').on('click', function () { 
     $('.nav__list').toggleClass('nav__list--active');
     $('.nav__btn').toggleClass('nav__btn--close');
   });

  
    var mixer = mixitup('.gallery__content');
});

document.addEventListener("DOMContentLoaded", function(){
   var links = document.querySelectorAll(".nav__list li a:not([href='#'])");
   for(var x=0; x<links.length; x++){
      links[x].onclick = function(){
         document.querySelector("button").click();
      }
   }
  
});