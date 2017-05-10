$(document).ready(function() {
    var state=0;
    $(".icon").click(function() {
        if (state===0){
            $(".responsive-nav").slideDown('fast');
            state=1;
            setTimeout(function() {
                    $(".responsive-nav").slideUp('fast');
                    state=0;
            },5000);
        }
        else {
            $(".responsive-nav").slideUp('fast');
            state=0;
        }        
    });
});
$(window).scroll(function() {
    var condition='unsticked';
    var stick= $('.mainbody').offset().top;
    var stick2= $('.mainbody').offset().bottom;
    var unstick =$('div.icon1 img').offset().top;
    if ( $(window).scrollTop() >= stick && condition=='unsticked' ) {
        $("#part1").addClass('fixedtop');
        $(".part15").css('display','inline-block');
        $("#part1").width('17%');
    }
    else if ( $(window).scrollTop() < stick && condition=='unsticked' ) {
        $("#part1").removeClass('fixedtop');
        $(".part15").css('display','none');

    }
    if ( $(window).scrollTop() >= unstick && condition=='unsticked' ) {
        $("#part1").removeClass('fixedtop');
        $(".part15").css('display','none');
        $("#part1").css('vertical-align','bottom'); 
        $("#part1").width('20%');
        condition='sticked';
    }
    if ( $(window).scrollTop() <= unstick  && condition=='sticked' ) {
        $("#part1").addClass('fixedbottom');
    }
    else if ($(window).scrollTop() > unstick && condition=='sticked' ) {
        $("#part1").removeClass('fixedbottom');
    }
    if ( $(window).scrollTop() <= stick && condition=='unsticked' ) {
        $("#part1").removeClass('fixedbottom');
        $("#part1").css('vertical-align','top');
        $("#part1").width('20%');
        condition='unsticked';
    }
  });