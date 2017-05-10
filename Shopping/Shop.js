// Randomly generate three different images
$(document).ready(function() {
    var x=Math.floor(Math.random() * 9); 
    var y=Math.floor(Math.random() * 9); 
    var z=Math.floor(Math.random() * 9); 

    while (y===x) {                        
        y=Math.floor(Math.random() * 9);
    }
    while ( x===z) {                          
        z=Math.floor(Math.random() * 9);    
        if (z===y || z===x) {
                while (true) {              
                    z=Math.floor(Math.random() * 9);  
                    if ( x!==z && y!==z) {   
                            break;
                        }
                }
        } 
    }
    while (z===y) {                           
        z=Math.floor(Math.random() * 9);
        if (z===y || z===x) {
                while (true) {
                    z=Math.floor(Math.random() * 9);
                    if ( x!==z && y!==z) {
                        break;
                    } 
                }
        }
    }
    var source= ['image/Cambodia_Travel_guide.png','image/Laos_travel_guide.png','image/Southeast_Asia_on_a_Shoestring_travel_guide.png','image/Thailand_travel_guide.png', 'image/Vietnam__Cambodia__Laos___Northern_Thailand_travel_guide.png' ,'image/Vietnamese_phrasebook.png','image/Thailand__Cookbook__Medium.png','image/Thailand_s_Islands___Beaches_travel_guide.png','image/3057-Hill_Tribes_phrasebook.png'];
    var sourcename= ['Cambodia Travel Guide','Laos Travel Guide','Southeast Asia on a Shoestring','Thailand Travel Guide','Vietnam, Cambodia, Laos, Northern Thailand Travel guide','Vietnamese phrasebook', 'Thailand (Cookbook)', "Thailands Islands & Beaches Travel Guide",'Hilltribes phrasebook'];
    $('.product1').attr('src', source[x]);     
    $('.product2').attr('src', source[y]);
    $('.product3').attr('src', source[z]);
    $('.link1').html(sourcename[x]);
    $('.link2').html(sourcename[y]);
    $('.link3').html(sourcename[z]);
});
$(document).ready(function() {
    var content=0;
    var text= 'Shopping help and FAQs'
    $(".faqclick").on('click',function (){
        if (content == 0) {
            $(".faqclick").html('<i class="fa fa-caret-down" aria-hidden="true">' + '</i>'+ '</span>&nbsp;' + '&nbsp;' + text +'</span>');
            content=1;
            $("#faqss").slideDown('2000'); 
        }
        else {
            $(".faqclick").html('<i class="fa fa-caret-right" aria-hidden="true">' + '</i>' + '</span>&nbsp;' + '&nbsp;' + text +'</span>');
            content=0;
            $("#faqss").slideUp('2000'); 
        }
    });
});
$(document).ready(function() {
    var items=0;                                    //Number of items in the shopping cart
    var itemsprice=$('.price').html();              
    var purchase=0;                                 //Number of the same purchase
    var price=$('.price').html();                                               //Subtotal 
    var price2=$('.price').html() -2.50;                                        //Subtotal with discount          
    var title= $('.booktitle').html();              //Number of the same purchase
    var condition=25;                                //Condition for free shipping
    var deliver=3.00;                               //Delivery price
    var used=0;                                     // Promo code
    $('.add-button').on('click',function () {   
        $(".wrapper").slideDown();
        items = items +1;                           //Add total items in cart
        if (items == 1) {
            $(".carttitle").html('Your Shopping Cart' +' ( '+items+' item)');  //add items on click
        }
        if (items >1) {
            $(".carttitle").html('Your Shopping Cart' +' ( '+items+' items)');
        }
        purchase+=1;                                                            //add numbers of purchases
        title= purchase+'x '+ $('.booktitle').html();                           //Change title based on number of purchases
        $('.booktitle2').html(title);                                           //Get item's title
        price=$('.price').html() *purchase;
        price2=$('.price').html() *purchase -2.50;
        condition=25-price;
        total1=price+deliver;                                                           //Total with deliveryfee
        total2=price2+deliver;
        $('.subtotalprice').html('GBP'+' '+'£'+ price);
        if (price < 25) {
            $('.requirement').html('£'+ condition);
            $('.totalnumber').html('£'+ total1);
        }   
        if (price >= 25) {                                                       //When free shipping condition is met, change texts
            deliver=0;
            $('.deliveryfee').html('<strike>'+'£3.00'+'</strike>'+' Free');
            $('.offers').html('Youve qualified for FREE SHIPPING!');
            $('.offers').css('background-color','#e2f5da');
            $('.offers').css('color','#409c20');
            $('.totalnumber').html('£'+ price);
        }
    });
    $('#remove').on('click',function() {                                        //Reset everything
        purchase=0;
        items = 0;
        price=0;
        used=0;
        deliver=3.00;
        $(".wrapper").slideUp();
        $('.carttitle').html('Your shopping cart is empty. (0 items)');
        $('.subtotalprice').html('GBP £0.00');
        $('.booktitle2').html('');
        $('.totalnumber').html('£0.00');
        $('.offers').html('FREE SHIPPING on orders over £25 (excludes pre-orders). Spend another '+ "<span class='requirement'>"+"</span>" + ' to qualify!');
        $('.deliveryfee').html('£3.00');
        $('.invalid').css('display','none');
        $('.offers').css('background-color','#eee1f9');
        $('.offers').css('color','#683597');
        $('.valid').css('display','none');
        $(".used").css('display', 'none');
        $(".discount").html('Saved £0.00');
    });
 //Check if the promocode was used    
    
    $(".submitbutton").on('click',function() {
        if ($('.code').val()=='Promocode' && used==0) {                         //If promodecode is correct
            $(".valid").css('display', 'block');                            
            $(".valid").html('<i class="fa fa-check" aria-hidden="true">'+ '</i>' +' '+ 'Promocode accepted - Please enjoy your discount');
            $('.invalid').css('display','none');
            price2=$('.price').html()*purchase -2.50;
            $('.subtotalprice').html('GBP'+' '+'£'+ price2);
            $(".discount").html('Saved £2.50');
            used = 1;
            if (price2 <23.5) {                                                 //Free shipping requirements
                $('.totalnumber').html('£'+ total2);
            }
            else {
                $('.totalnumber').html('£'+ price2);
            }
        }
        else if ($('.code').val()=='Promocode' && used==1) {                    //If promode was used before
            $(".used").css('display', 'block');
            $(".used").html('<i class="fa fa-exclamation-triangle" aria-hidden="true">'+'</i>' +' '+ 'Promocode used - Please try a different code');
            $('.invalid').css('display','none');
            $('.valid').css('display','none');
        }
        else {                                                                  //Wrong promode code
            $(".invalid").css('display', 'block');
            $('.invalid').html('<i class="fa fa-exclamation-triangle" aria-hidden="true">' + '</i>' +' '+ 'This code is invalid - please note that codes are case-sensitive');
            $('.valid').css('display','none');
            $(".used").css('display', 'none');
        }
    });  
}); 
$(document).ready(function() {
    $("a[href='#bottom']").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
    });
});

 
