$(document).ready(function(){
    $('#myCarousel').carousel({
		pause: 'none'
	});    
	  	
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
    setTimeout(function(){
    $("#special").fadeIn('slow'); 
     $("#special").css('display','block'); 
        
},500)
}) ;
setTimeout(function(){
    document.getElementById('firstimage').removeAttribute('id');
}, 2000);
