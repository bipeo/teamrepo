$(document).ready(function(){
	$("select").selecter();
	
	$('.slick_slider').slick({
		arrows: true,
		dots: false
	});
	
	// accordeon
	$('.answer').css({'display':'none'});
			
	$('.accord_title').click(function(){
		$('.accord_title').not($(this)).removeClass('open');
		$('.answer').not($(this).next('.answer')).slideUp(500);
		$(this).next('.answer').slideToggle(500);
		$(this).toggleClass('open');
	});
	
	// tarif mobile
	$('.show_hide').css('display', 'none');
	$('.tarif_block').on('click', function() {
		$(this).prev('.show_hide').slideToggle(500);
		$(this).prevAll('.tarif_ul').toggleClass('new_bg');
		$(this).toggleClass('new_bg');
	});
        
           $('.tarif_ul').on('click',function() {
               
                $(this).next('.show_hide').slideToggle(500);
                $(this).nextAll('.tarif_block').toggleClass('new_bg')
                $(this).toggleClass('new_bg');
        });

	
	$('.block_4_ul li').matchHeight();
	
	// табы
    $('.tabs a').click(function(e) {
        e.preventDefault();
        $('.tabs .active').removeClass('active');
        $(this).parent().addClass('active');
        var tab = $(this).attr('href');
        $('.for_tabs > div').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
	
	var slick_2 =  $('.slick_2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,    
		infinite: true,
                fade: true,
		//arrows: false,
                prevArrow: $('.prev'),
                nextArrow: $('.next'),
	});
        $('.slick_2').on('afterChange', function(event, slick, currentSlide, nextSlide){
         $('.block_3_ul > li').removeClass('act');
         $('.block_3_ul > li').eq(currentSlide).addClass('act');
         
          
        /*try toggle*/
      
        /*try toggle end*/ 
       // $('.block_3_ul > li[data-id=' + (currentSlide + 1) + ']').hide();
       
        });
	 $('.block_3_ul > li').on('click', function () {
              var slideIndex = $(this).index();
              $(".slick_2").slick('slickGoTo', parseInt(slideIndex));
	});
	
	
	$('.for_mask').mask('+7(000) 000-00-00');
	
	$('#top_menu').fixedHeader()
	$(window).scroll(function(){
		$('#top_menu').fixedHeader()
	});
      
	 // перемотка
    $('.top_menu_ul a').click(function(event) {
        event.preventDefault();

        var my_attr = $(this).attr('href').substring(1);
        gotoblock(my_attr);
    });
	
	// form validate
	$.validate({
	  	form : '#form_main', 
		lang : 'ru'
	});
	$('#link_submit').on('click', function() {
		$(this).submit();
		return false;
	});
});

jQuery(window).scroll(function(){
    var bcb_0 = $('.block_2').outerHeight(),
     bcb_1 = $('.bcb_1').outerHeight(),
     bcb_2 = $('.bcb_2').outerHeight(),

    header = $('header').outerHeight(),
    top_menu = $('.top_menu').outerHeight();
   
    var fromTopPx = header + top_menu + bcb_1; // distance to trigger
    var fromMidPx = header + top_menu + bcb_1 + bcb_2 ; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        console.log('11');
        jQuery('body').addClass('bg_2');
    }
     if(scrolledFromtop > fromMidPx){
        console.log('22');
        jQuery('body').addClass('bg_2');
    }
    else{
         console.log('44');
        jQuery('body').removeClass('bg_1');
         jQuery('body').removeClass('bg_2');
         jQuery('body').addClass('bg_3');
    }
});

/****  focus box  in-view ****/
var $animation_elements = $('.bussines > li, .block_3_ul_2 > li, .block_4_ul > li, .block_3, .block_3 .bcb_1, .block_3 .bcb_2 ');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
   /* if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    } */
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
      if($element.is('.block_3 .bcb_1')) {
        //  $('body').addClass('bg_3').removeClass('bg_2');
        /*change bg*/
       var bgCounter = 1,
        backgrounds = [
           "img/bg_1.jpg", 
           "img/bg_2.png",
           "img/bg_3.png",
        ];
    function changeBackground()
    {
      //  bgCounter = (bgCounter+1) % backgrounds.length;
        $('body').css('background-image', ' url('+backgrounds[bgCounter]+') ');
        setTimeout(changeBackground, 100000);

    }
    changeBackground();
            /*change bg end*/
        
      }
       if($element.is('.block_3 .bcb_2')) {
        //  $('body').addClass('bg_3').removeClass('bg_2');
        /*change bg*/
       var bgCounter = 1,
        backgrounds = [
           "img/bg_1.jpg", 
           "img/bg_2.png",
           "img/bg_3.png",
         
        ];
    function changeBackground()
    {
      //  bgCounter = (bgCounter+1) % backgrounds.length;
        $('body').css('background-image', ' url('+backgrounds[bgCounter]+') ');
        setTimeout(changeBackground, 100000);

    }
    changeBackground();
            /*change bg end*/
        
      }
    }  else {
      
   // $('body').removeClass('bg_3');
   
          /*change bg*/
       var bgCounter = 0,
        backgrounds = [
           "img/bg_1.jpg", 
           "img/bg_2.png",
           "img/bg_3.png",
        ];
    function changeBackground()
    {
      //  bgCounter = (bgCounter+1) % backgrounds.length;
        $('body').css('background-image', ' url('+backgrounds[bgCounter]+') ');
        setTimeout(changeBackground, 100000 );

    }
    changeBackground();
            /*change bg end*/
      
     // $element.removeClass('in-view');
    }
    
    
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
/**** focus box  in-view end ***/

jQuery.fn.fixedHeader = function () {
//      var window_width = $(window).width();
        if ($(window).scrollTop() >= 90 ) {
               this.addClass('pos_fixed');
            }
            else {
               this.removeClass('pos_fixed');
     } 
    return this;
}

function gotocoord(val){
    $("html,body").stop(true, true).animate({'scrollTop': val-160}, 750);
}

function gotoblock(id){
    var obj = $('#'+id);
    var destination = obj.offset().top;
    $("html,body").stop(true, true).animate({'scrollTop': destination-160}, 750);
}



$(document).ready(function () {
    
      $('.tarif_pl').find('.tarif_mobile_item .out_tar').click(function(){
     
      
      $(this).parent().toggleClass('act');      
     
      $(this).next().slideToggle('fast');
      
      
      $('.tarif_mobile_item').not($(this).parent()).removeClass('act');  
      $(".show_hide_planshet").not($(this).next()).slideUp('fast');

          
          
  })
   

    
    
  });
 

  
  