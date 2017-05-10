$(document).ready(function(){
    var d = new Date();
    var date = d.getDate();
    var date1 = d.getDate()+1;
    var month=d.getMonth()+1;
    var year=d.getFullYear();
    $("#calendar1").attr('value', month +"/"+ date +"/"+year);
    $("#calendar2").attr('value', month +"/"+ date1 +"/"+year);
});
/* Limit date */
$(document).ready(function(){
    $( "#calendar1" ).datepicker({
      minDate: 0,
    });
    $( "#calendar2" ).datepicker({
        minDate: 1, 
    });
});
/* Section 4 */
$(document).ready(function() {
    $('.content2 a').hover(function(){
      $(this).parent().css('background-color','whitesmoke');
    });
    $('.content2 a').mouseleave(function(){
      $(this).parent().css('background-color','white');
    });
});
$(document).ready(function() {
    $("a[href='#bottom']").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
    });
});
//Navbar
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
