$(function () {
        /**
         * marketer UI Script Initialize.
         */
        marketer.init();
})

const marketer = {
        init: function () {
            marketer.toggleSlideMenu();
            marketer.getScroll();
            marketer.backTop();
            marketer.slide();
            marketer.popup();
        },

        toggleSlideMenu: function () {
            $('.panel-item').on('click', function () {
                $(this).find('.answer').slideDown();
                $(this).siblings().find('.answer').slideUp();
            }).eq(1).trigger('click');

            $('.btn-menu').on('click', function () {
                $(this).prev('nav').slideToggle();
            });
        },


        getScroll: function () {
            $(window).on('scroll', function () {
                const scrollTop = $(Window).scrollTop();
                if (scrollTop > 300) {
                    $('html').addClass('show-header')
                } else {
                    $('html').removeClass('show-header')
                }
            });
        },

        backTop: function () {
            $('.back-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 400)
            });
        },

        slide: function () {
            $(".slide").slick({
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                dots: true
            });
        },

        popup: function () {
            const src = $(this).find('img').attr('src')
            $('.gallery li').on('click', function () {
                $('.popup').show().find('img').attr('src', src);
            });
            $('.screen').on('click', function () {
                $('.popup').hide();
            });
        }


};

