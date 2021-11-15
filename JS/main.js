//Animataion
AOS.init();

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
        if (windowSize >= 992) {
            $('.side-menu').removeClass("offcanvas-menu");
        }
    }
    checkwidth();
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
            // $('.header1').addClass("fixed");

        } else {
            $('.header1').removeClass("fixed");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });




    var typed = new Typed(".typing", {
        strings: ["Front-end Developer", "Web Designer" ,"Angualr Developer ", "Database Creater "],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    });
    var typed = new Typed(".typing2", {
        strings: ["Namaste","Hello ", "Hola ", "Bonjour"],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
    });

})