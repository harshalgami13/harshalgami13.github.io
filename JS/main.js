$(document).ready(function () {
    $('.head-btn').click(function () {
        $('.side-menu').addClass("offcanvas-menu");
    })
    $('.close-btn').click(function () {
        $('.side-menu').removeClass("offcanvas-menu");
    })
    $('.head').click(function () {
        $('.side-menu').removeClass("offcanvas-menu");
    })

    function checkwidth() {
        var windowSize = $(window).width();
        if (windowSize >= 767) {
            $('.side-menu').removeClass("offcanvas-menu");
        }
    }
    checkwidth();
    // Bind event listener
    $(window).resize(checkwidth);
})