$(document).ready(function () {
    $('.head-btn').click(function () {
        $('.side-menu').addClass("offcanvas-menu");
        $('.head-btn').addClass("show");
    })
    $('.close-btn').click(function () {
        $('.head-btn').removeClass("show");
        $('.side-menu').removeClass("offcanvas-menu");
    })
    $('.head').click(function () {
        $('.head-btn').removeClass("show");
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