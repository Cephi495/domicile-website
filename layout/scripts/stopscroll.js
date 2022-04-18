var $body = $('body'),
    scrollDisabled = false,
    scrollTop;

function scrollDisable() {
    if (scrollDisabled) {
        return;
    }
    scrollTop = $(window).scrollTop();
    $body.addClass('stop_scroll').css({
        top: -1 * scrollTop
    });
    scrollDisabled = true;
}
function scrollEnable() {
    if (!scrollDisabled) {
        return;
    }
    $body.removeClass('stop_scroll');
    $(window).scrollTop(scrollTop);
    scrollDisabled = false;
}
