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




    // scroll-up button show/hide script
    $(window).scroll(function () {
        if (this.scrollY > 150) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
        if (this.scrollY > 50) {
            $('.social').addClass("show");
        } else {
            $('.social').removeClass("show");
        }
        if (this.scrollY > 0) {
            $('.header1').addClass("fixed");
        } else {
            $('.header1').removeClass("fixed");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });
})