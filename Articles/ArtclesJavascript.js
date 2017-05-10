$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
        $('#vietnamcuisine').fadeIn(3000);
        $('#vietnamcuisine').addClass("section2");
    }
    if($(window).scrollTop() > $(document).height() -$(window).height() - 100) {
        $('#lantern').fadeIn(3000);
        $('#lantern').addClass("section2");
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