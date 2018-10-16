
$( document ).ready(function() {
    let link = ''

    $('.nav-link').click(function(){
        let link = $(this).attr('data-scroll')
        console.log(link)

    let toto = $('#'+link).offset()
    console.log(toto)

    $('html,body').animate({
        scrollTop: toto.top - 101 },
        'slow');

        return(false)
    })

    $('.slicky').slick({
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $( document ).ready(function() {
        $(".js-modal-btn").modalVideo();        
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 670) {
        $('.navbar').css('background','#5263ba');
        } else {
        $('.navbar').css('background','transparent');
        }
        });
    
}); 



