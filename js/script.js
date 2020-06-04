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
                marketer.backTop()
                marketer.visualSlide();
        },
        toggleSlideMenu: function () {
                $('.que').on('click', function () {
                        $(this).toggleClass('is_active')
                        $(this).next('.answer').slideToggle()
                }).eq(1).trigger("click")

        },

        visualSlide: function () {

        }

};

