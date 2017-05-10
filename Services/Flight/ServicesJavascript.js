$(document).ready(function(){
    var d = new Date();
    var date = d.getDate();
    var date1 = d.getDate()+1;
    var month=d.getMonth()+1;
    var year=d.getFullYear();
    $("#calendar1").attr('value', month +"/"+ date +"/"+year);
    $("#calendar2").attr('value', month +"/"+ date1 +"/"+year);
    $('#checkbox2').click(function(){
        if (this.checked) {
            $("#calendar2").attr('value', "One way");
        }
    });
    $('#checkbox1').click(function(){
        if (this.checked) {
            $("#calendar2").attr('value',month +"/"+ date1 +"/"+year);
        }
    });
});
$(document).ready(function(){
    $( "#calendar1" ).datepicker({
      minDate: 0,
    });
    $( "#calendar2" ).datepicker({
        onSelect: function() {
            $('#checkbox1').prop("checked", true);
        },
        minDate: 1, 
    });
});

/* Passengers */
$(document).ready(function(){
    var x=1;
    $('#number').attr('value',x);
    $('#plus').on( "click", function() {
      if (x<6){
        $('#number').attr('value',x+1);
        x=x+1;
      }
    });
    $('#minus').on( "click", function() {
      if (x>1) {
        $('#number').attr('value',x-1);
        x=x-1;
      }
    });
});
/* section 4 */
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
        $("html, body").animate({ 
            scrollTop: $(document).height() }, "slow");
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
            },3000);
        }
        else {
            $(".responsive-nav").slideUp('fast');
            state=0;
        }        
    });
});
