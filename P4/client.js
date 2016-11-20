/**
 * Created by boyander on 11/10/16.
 */
$(document).ready(function(){

    $('img').mouseenter(function() {
        $(this).animate({width:'250px',height:'375px'},'fast');
        $(this).parent().addClass("selected");
    });
    $('img').mouseout(function() {
        $(this).animate({width:'230px', height:'350px'},'fast');
        $(this).parent().addClass("selected");
    });
});
