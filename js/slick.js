$(document).ready(function () {
    $('.slide').slick(
        {
            dots: true,
            arrows: true,
            nextArrow: '.arrow.next',
            prevArrow: '.arrow.prev',
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 2000,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1160,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 4,
                    }

                },
                {
                    breakpoint: 767.9,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 4,
                    }
                }
            ]
        }
    );
});