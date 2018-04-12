// $(document).on('ready', function() {
//
//     $(".center").slick({
//
//         infinite: true,
//         centerMode: false,
//         slidesToShow: 10,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         speed: 100,
//         cssEase: 'ease-out'
//     });
//
// });


var controller1 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0,
        reverse: true
    }
})

var arr = [".top"];

arr.forEach(function(v,i,a) {
    console.log(v)
    new ScrollMagic.Scene({
        triggerElement:'.header2'
    }).setClassToggle(v, 'fade-in')
     //.addIndicators()
        .addTo(controller1)
})





if(window.matchMedia('(max-width: 640px)').matches)
{
    // do functionality on screens smaller than 768px
    $(document).on('ready', function()
    {
        $(".center").slick({

            infinite: true,
            centerMode: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 100,
            cssEase: 'ease-out'
        });

    });
}
else {
    $(document).on('ready', function () {

        $(".center").slick({

            infinite: true,
            centerMode: false,
            slidesToShow: 10,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 100,
            cssEase: 'ease-out'
        });

    });
}