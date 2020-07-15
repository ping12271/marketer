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
        marketer.handleImagePopup();
        marketer.handleArrows();
        marketer.setPagination();
    },

    toggleSlideMenu: function () {
        $('.panel .item').on('click', function () {
            $(this).find('.answer').slideDown();
            $(this).siblings().find('.answer').slideUp();
        }).eq(1).trigger('click');

        $('.btn-menu').on('click', function () {
            $(this).prev('nav').slideToggle();
        });
    },

    getScroll: function () {
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
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
        $('.visual').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: true
        });
        $('.slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false
        });
    },

    handleImagePopup: function () {
        $('.gallery li').on('click', function () {
            index = $(this).index();
            const src = $(this).find('img').attr('src');
            $('.popup').css({display: 'flex'}).find('img').attr('src', src);
            setPagination();
        })

        $('.popup').on('click', function () {
            $('.popup').hide();
        })
    },

    handleArrows: function () {
        $('.popup i').on('click', function (e) {
            e.stopPropagation();
            const length = $('.gallery li').length;
            const type = $(this).data('type');
            if (type === 'left') {
                if (index === 0) {
                    index = length;
                }
                index = index - 1;
                const src = $('.gallery li').eq(index % length).find('img').attr('src');
                $('.popup').find('img').attr('src', src);
            }

            if (type === 'right') {
                index = index + 1;
                const src = $('.gallery li').eq(index % length).find('img').attr('src');
                $('.popup').find('img').attr('src', src);
                setPagination();
            }
        })
    },

    setPagination: function () {
        const length = $('.gallery li').length;
        $('.pagination').html(`${index % length + 1}/${length}`)
    }
};

