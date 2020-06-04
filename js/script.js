$('.que').on('click', function(){
        $(this).closest('li').toggleClass('is_active')
        $(this).next('.answer').slideToggle();
})


