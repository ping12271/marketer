$('.gallery a').on('click', function () {
    $('.popup').addClass('show');
})

$('.popup').on('click', function () {
    $('.popup').removeClass('show')
})


//toggle//
$('.que').on('click', function(){
    $(this).closest('li').toggleClass('is_active')
    $(this).next('.answer').slideToggle();
})

//header//

