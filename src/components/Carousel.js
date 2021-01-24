import React from "react";
import Slider from 'react-slick';
import Card from './Card';

/*
* carousel
*/
function Carousel(props) {

    const settings = {
        dots: true,
        infinite: props.restaurants.length > 3,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                infinite: true,
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
            }
        ]
    };

    return (
        <div className="carousel-container">
            <h2 className="title">&raquo;&raquo; {props.title} &laquo;&laquo;</h2>
            <Slider {...settings}>
                {
                    props.restaurants && props.restaurants.map((item, index) =>
                        <Card key={index} restaurant={item} />
                    )
                }
            </Slider>
        </div>
    );
};

export default Carousel;