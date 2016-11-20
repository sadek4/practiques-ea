/**
 * Created by boyander on 11/10/16.
 */
$(document).ready(function(){

    $('.img-rounded').mouseenter(function() {
        $(this).animate({width:'215px'},'fast');
        $(this).parent().addClass("selected");
    });
    $('.img-rounded').mouseout(function() {
        $(this).animate({width:'200px'},'fast');
        $(this).parent().removeClass("selected");
    });
});
