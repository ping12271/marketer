$(function () {
        /**
         * marketer UI Script Initialize.
         */
        marketer.init();
})

const marketer = {
        init: function () {
                marketer.toggleSlideMenu()
                marketer.toggleClass()
                marketer.getScroll()
                marketer.backTop();
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


        toggleClass: function () {
            $('.nav-item').on('mouseover', function () {
                    $(this).find('.nav-dropdown').addClass('active');
            });
            $('.nav-item').on('mouseout', function () {
                $(this).find('.nav-dropdown').removeClass('active');
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
        }


};

