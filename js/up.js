$(document).ready(function(){

    $("#aparecertexto,#aparecer-img").hide();
        $("#aparecertexto,#aparecer-img").fadeIn(4200);


$('#ir-arriba').hide();

$(window).scroll(function(){

if ($(this).scrollTop() > 100){
    $('#ir-arriba').fadeIn('1000');
}

else

{
    $('#ir-arriba').fadeOut('1000');

}
});

$('#ir-arriba').click(function(){

$('body, html').animate({
scrollTop:0
});

});



});