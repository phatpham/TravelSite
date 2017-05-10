$(document).ready(function(){
    $('#myCarousel').carousel({
		pause: 'none'
	});    
});
//Add more content
$(document).ready(function(){
    var showchar=200;
    var moretext="Read More";
    var lesstext="Show Less";
    var dot ="...";
    $(".more").each(function(){
        var content= $(this).html();
        if (showchar < content.length) {
            var c = content.substr(0, showchar);
            var h = content.substr(showchar, content.length-showchar);
            var html = c + "<span class=dot>" + dot + "</span><span class=morecontent><span>" + h + '</span><a href="" class=linkbutton>' + moretext +"</a></span>";
            $(this).html(html);
        }
    });
        $(".linkbutton").click(function(){
            if ($(this).hasClass("less")){
                $(this).removeClass("less");
                $(this).html(moretext);
            }
            else {
                $(this).addClass("less");
                $(this).html(lesstext);
            }
            $(this).parent().prev().toggle();
            $(this).prev().toggle();
            return false;
        });
});    
//Fade-in text on carousel
$(document).ready(function(){
    setTimeout(function(){
        $("#special").fadeIn('slow'); 
        $("#special").css('display','block');     
},500);
    setTimeout(function(){
        document.getElementById('firstimage').removeAttribute('id');
    }, 2000);
});
//Fixed 
$(window).scroll(function() {
    var condition='unsticked';
    var stick= $('.section6').offset().top;
    var stick2= $('.section6').offset().bottom;
    var unstick =$('.part2').offset().top;
    if ( $(window).scrollTop() >= stick + 200 && condition=='unsticked' ) {
        $("#advertisement").addClass('fixedtop');
    }
    else if ( $(window).scrollTop() < stick + 200 && condition=='unsticked' ) {
        $("#advertisement").removeClass('fixedtop');
    }
    if ( $(window).scrollTop() >= unstick +170 && condition=='unsticked' ) {
        $("#advertisement").removeClass('fixedtop');
        $("#advertisement").css('vertical-align','bottom'); 
        condition='sticked';
    }
    if ( $(window).scrollTop() <= stick2  && condition=='sticked' ) {
        $("#advertisement").addClass('fixedbottom');
    }
    else if ($(window).scrollTop() > stick2 && condition=='sticked' ) {
        $("#advertisement").removeClass('fixedbottom');
    }
    if ( $(window).scrollTop() <= stick + 200 && condition=='unsticked' ) {
        $("#advertisement").removeClass('fixedbottom');
        $("#advertisement").css('vertical-align','top'); 
        condition='unsticked';
    }
  });
$(document).ready(function() {
    $("a[href='#bottom']").click(function() {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      return false;
    });
});
$(document).ready(function() {
    var state=0;
    $(".icon").click(function() {
        if (state===0){
            $(".responsive-nav").slideDown('fast');
            state=1;
            setTimeout(function() {
                    $(".responsive-nav").slideUp('fast');
                    state=0;
            },3000);
        }
        else {
            $(".responsive-nav").slideUp('fast');
            state=0;
        }        
    });
});
