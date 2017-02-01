var React = require('react');
var SlickSliderImage = require('./SliderImage');
var SlickSlider = require('react-slick-carousel');

var Slider = React.createClass({
    render: function () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 7000,
            pauseOnHover: false,
            draggable: false,
            easing: 'easeOutQuad',
            accessibility: false,
            lazyLoad: false,
            infinite: true
        };
        var images = [];
        for (var i = 1; i < 9; i++) {
            images.push(<div className={'SliderImage'} key={i}>
                <h3>
                    <img src={'/app/images/' + i + '.jpg'} alt={i}/>
                </h3>
            </div>);
        }
        return (
            <SlickSlider {...settings}>
                {images}
            </SlickSlider>
        );
    }
});

module.exports = Slider;
