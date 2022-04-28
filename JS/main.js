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

    $('.social-trg').click(function () {
        $('.social-grp').toggle(500);
    })

    function checkwidth() {
        var windowSize = $(window).width();
        if (windowSize >= 992) {
            $('.side-menu').removeClass("offcanvas-menu");
        }
    }
    checkwidth();
    $(window).resize(checkwidth);




    // scroll-up button show/hide script + header fixed
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



    //typing js
    var typed = new Typed(".typing", {
        strings: ["Front-end Developer", "Web Designer", "Database Creater "],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });
    var typed = new Typed(".typing2", {
        strings: ["Namaste", "Hello ", "Hola ", "Bonjour"],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });


    //swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            425: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });


})