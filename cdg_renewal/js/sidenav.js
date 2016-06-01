/*sidenav.js*/
var sidenav = function(){
       var navBtn = $('#side_button').find('li'),
            $body = $('html, body'),
            firBtn = navBtn.eq(0),
            secBtn = navBtn.eq(1),
            thdBtn = navBtn.eq(2),
            fourBtn = navBtn.eq(3),
            $art01 = $('#article01Wrap').offset().top,
            $art02 = $('#article02Wrap').offset().top,
            $art03 = $('#article03Wrap').offset().top,
            $art04 = $('#article04Wrap').offset().top;
    
    firBtn.on('click', function(e){
        e.preventDefault();
        $body.animate({'scrollTop': 0 }, 500)});
    secBtn.on('click', function(e){
        e.preventDefault();
        $body.animate({'scrollTop': $art02 - 80}, 500);});
    thdBtn.on('click', function(e){
        e.preventDefault();
        $body.animate({'scrollTop': $art03 - 80}, 500);});
    fourBtn.on('click', function(e){
        e.preventDefault();
        $body.animate({'scrollTop' : $art04 - 80}, 500);
    });
};