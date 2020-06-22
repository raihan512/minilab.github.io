$(document).ready(function () {
    //Popup Video
    $(".work-popup").magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },

            },

            srcAction: 'iframe_src',
        }
    });
    //Client Slider
    $('.client-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		  
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});
      //Scrolltop Button
        $(window).scroll(function(){
           if($(this).scrollTop() > 20){
            $('#topbtn').fadeIn();
          } else {
            $('#topbtn').fadeOut();
          }
         });
  
         $('#topbtn').click(function(){
                   $('html,body').animate({scrollTop: 0}, 500);
         });
});