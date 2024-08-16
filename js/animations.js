$(document).ready(function() {
    // Scroll effect fadeIn
    $(window).scroll( function(){
        $('.fadeIn').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object  - 50){
                $(this).animate({'opacity':'1'}, 800);
            }
        }); 
    });

    // Scroll effect grow
    $(window).scroll( function(){
        $('.scalable').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object - 80){
                $(this).addClass('animate');
            }
        }); 
    });

    // Mark selected language
    const url = $(location).attr('href');
    if(url.includes('-gr')){
        $('#greek>img').addClass('lan-selected');
    }else{
        $('#english>img').addClass('lan-selected');
    }
});



