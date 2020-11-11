(function ($) {
    //scroll to top
    var btn = $(".header");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            btn.addClass("scroll");
        } else {
            btn.removeClass("scroll");
        }
        console.log($(window).scrollTop());
    });
})(jQuery);