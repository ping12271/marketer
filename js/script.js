$(function () {
        /**
         * marketer UI Script Initialize.
         */
        marketer.init();
})

const marketer = {
        init: function () {
                marketer.toggleSlideMenu()
                marketer.getScroll()
                marketer.backTop();
                marketer.slide();
        },

        toggleSlideMenu: function () {
                $('.panel-item').on('click', function () {
                        $(this).find('.answer').slideDown();
                        $(this).siblings().find('.answer').slideUp();
                }).eq(1).trigger('click');

                $('.btn-menu').on('click', function () {
                    $('.main-header nav ul').slideToggle();
                });
        },

        getScroll: function () {
                $(window).on('scroll', function () {
                    const scrollTop = $(Window).scrollTop();
                        if (scrollTop > 300){
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
        }


};

