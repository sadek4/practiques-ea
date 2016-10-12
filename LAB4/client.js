/**
 * Created by boyander on 11/10/16.
 */
$(document).ready(function(){

    $('img').mouseenter(function() {
        $(this).animate({width:'225px',height:'325px'},'fast');
        $(this).parent().addClass("selected");
    });
    $('img').mouseout(function() {
        $(this).animate({width:'200px', height:'300px'},'fast');
        $(this).parent().addClass("selected");
    });
});