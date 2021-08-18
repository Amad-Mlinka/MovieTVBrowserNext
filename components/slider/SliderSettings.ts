export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 3560,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 1860,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 1424,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};