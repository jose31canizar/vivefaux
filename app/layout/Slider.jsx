import React, {Component} from 'react';

class Slider extends Component {
    render() {
        var images = [];

        //<img className={'SliderImage'} src={require('./img/' + i + '.jpg')} alt={i}/>

        for (var i = 1; i < 9; i++) {
            images.push(<div key={i}>
                    
            </div>);
        }
        return (
            <div>
                {images}
            </div>
        );
    }
};

export default Slider;
