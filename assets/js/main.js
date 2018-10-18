
/* permet en cliquant sur les nav-link de descendre en balayant le site */

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

    /* carousel */

    $('.slicky').slick({
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    /* modal video */

    $( document ).ready(function() {
        $(".js-modal-btn").modalVideo();        
    });

    /* navbar qui passe de link à color en scrollant à la section suivante */

    $(window).scroll(function () {
        if ($(window).scrollTop() >= (569)) {
        $('.navbar').css('background','#5263ba');
        } else {
        $('.navbar').css('background','transparent');
        }
        });
        

    // animation header parallax 

    var scene = document.getElementById('accueil');
    var parallaxInstance = new Parallax(accueil);
    
    }); 



