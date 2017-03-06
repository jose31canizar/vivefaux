var React = require('react');
var SlickSliderImage = require('./SliderImage');
var SlickSlider = require('react-slick-carousel');
var Parallax = require('scroll-parallax');

var Slider = React.createClass({
    componentDidMount : function() {
      var p = new Parallax('.parallax', {
        offsetYBounds: 50,
        intensity: 30,
        center: 0.5,
        safeHeight: 0.15
      }).init();
    },
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
            images.push(<div key={i}>
                    <img className={'SliderImage parallax'} src={'images/' + i + '.jpg'} alt={i}/>
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
