$(document).ready(function()
        {
 
	$('.btn_menu').on('click', function() {
		
		$("html, body").css('overflow-y', 'hidden');
//		var heightMenu = $('#menu_mobile').outerHeight();
//		$('#menu_mobile').css('height', heightMenu );
	});
	
		///////////////////////////////////////////////////////////////////////// menu_mobile

		var pull 		= $('.btn_menu');
			menu 		= $('#menu_mobile');
			menuHeight	= menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
                    
                    menu.slideToggle();

//                    $(this).toggleClass('close_menu');
		});
                
                 $(document).mouseup(function (e)
    {
        var container = menu.add(pull);

        if (!container.is(e.target) 
            && container.has(e.target).length === 0) 
        {
            $('#menu_mobile').hide(500);
         
        }
    });
	
		$('.close_menu').on('click', function(e) {
			e.preventDefault();
			$('#menu_mobile').hide(500);
		});

		$(window).resize(function(){
			var w = $(window).width();
			if(w > 320 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});
			
			
			$('.close_btn').on('click',function() {
               $('.logform').hide(); 
            });
 

            $(window).load(function()
                {
                    getWidthAndHeight();
                }
            );


            $(window).resize(function()
                {
                   getWidthAndHeight();
                   
                }
            );


            function getWidthAndHeight() {
              
                var scrollHeight = document.documentElement.scrollHeight,
                clientHeight = document.documentElement.clientHeight;
                scrollHeight = Math.max(scrollHeight, clientHeight);
                 
                $(".wrap_bootle").css("min-height", scrollHeight + "px");
                
                        /*mobile menu height*/
                        
                        var wh =$(window).height(),
                         incr = 20,       
                         mm = $('#menu_mobile').outerHeight(),
                         toth = Math.max(wh, mm);
                         if(mm > wh) {
                             toth = wh;
                         } else {
                              toth = mm;
                         } 
			$('#menu_mobile').css('height',toth + incr + 'px');
                         /*mobile menu height end */
                
            }
    
        }
				  
	  
						  
	  

);
