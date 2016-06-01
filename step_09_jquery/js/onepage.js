$(function(){
    $(window).on('scroll', function(){
        
    var sc = $(this).scrollTop(),
        of = $('.offset').offset().top;
        $('.scrollTop').find('span').text(sc);
        $('.offset').find('span').text(of);
        
    if(sc <= 500){
        $('button').hide(1000);
    }else{
        $('button').show(1000);
    }
    }); // scroll
    
    $('button').on('click', function(){
//        $(window).scrollTop(0);
        $('html, body').animate({'scrollTop': 0}, 500);
                   })
    
}); // jQuery