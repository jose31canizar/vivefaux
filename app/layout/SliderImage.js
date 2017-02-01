var React = require('react');

var SliderImage = React.createClass({
    render: function () {
        return (
            <div className={'SliderImage'} key={this.props.key}>
                <h3>
                    <img src={'/src/images/slider_images/' + this.props.imageName + '.jpg'} alt={this.props.imageName}/>
                </h3>
            </div>
        );
    }
});

module.exports = SliderImage;
