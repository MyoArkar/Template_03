$(document).ready(function () {
    $('.tabs a').click(function () {
        $('.tabs a').removeClass("active");
        $(this).addClass("active");
        $('.panel').hide();
        var panel = $(this).attr('href');
        $(panel).show();
        return false;
    });
    $('.tabs li:first a').click();
});



