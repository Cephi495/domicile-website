jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
        jQuery("#bottom_envelope").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
        jQuery("#bottom_envelope").removeClass("visible");
    }
});
