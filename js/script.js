$(function () {
    /**
     * marketer UI Script Initialize.
     */
    marketer.init();
})

let index;

const marketer = {
    init: function () {
        marketer.toggleSlideMenu();
        marketer.getScroll();
        marketer.backTop();
        marketer.slide();
        marketer.handleImagePopup();
        marketer.handleArrows();
    },

    toggleSlideMenu: function () {
        $('.panel .item').on('click', function () {
            $(this).find('.answer').slideDown(100);
            $(this).siblings().find('.answer').slideUp(100);
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
            autoplaySpeed: 3000,
            arrows: false,
            dots: true,
            fade: true
        });
        var slickCustomEvent = {
            init : function(){
                slickCustomEvent.initialize()
                slickCustomEvent.beforeChange()
                slickCustomEvent.afterChange()
            },
            initialize : function(){
                var dataIndex = $('[data-slick-index="0"]');
                dataIndex.find('h1,p,.btn,img').addClass('fadeInUp');
            },
            beforeChange : function(){
                $('.visual').on('beforeChange', function(event, slick, currentSlide){
                    $('h1,p,.btn,img').removeClass('fadeInUp');
                });
            },
            afterChange : function(){
                $('.visual').on('afterChange', function(event, slick, currentSlide){
                    var dataIndex = $('[data-slick-index="' + currentSlide + '"');
                    dataIndex.find('h1,p,.btn,img').addClass('fadeInUp');
                });
            }
        }
        slickCustomEvent.init();

        $('.slider').slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
            ]
        });
    },

    handleImagePopup: function () {
        $('.gallery li').on('click', function () {
            index = $(this).index();
            const src = $(this).find('img').attr('src');
            $('.popup').css({display: 'flex'}).find('img').attr('src', src);
            marketer.setPagination();
        });

        $('.popup').on('click', function () {
            $('.popup').hide();
        });
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
                index--;
                const src = $('.gallery li').eq(index % length).find('img').attr('src');
                $('.popup').find('img').attr('src', src);
            }

            if (type === 'right') {
                index++;
                const src = $('.gallery li').eq(index % length).find('img').attr('src');
                $('.popup').find('img').attr('src', src);
                marketer.setPagination();
            }
        })
    },

    setPagination: function () {
        const length = $('.gallery li').length;
        $('.pagination').html(`${index % length + 1}/${length}`)
    }
};

