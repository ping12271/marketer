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
$(function () {
    $('.nav-item .nav-link').on('click', function () {
        $('.nav-item .links').slideToggle(200);
        $('.nav-item .nav-link .icon').toggleClass('show');
    })
})

