import React, {Component} from 'react';

class ImageSection extends Component {
    render() {
        var sectionContainerStyle = {
          backgroundColor: '#f0f0f0',
          backgroundSize: "cover",
          zIndex: this.props.index
        };

        var sectionContainerFilter = {
          filter: "grayscale(10%) brightness(100%) contrast(90%)"
        }

        const imgUrl = '/app/layout/img/' + this.props.index + '.jpg';
        // backgroundImage: 'url(' + imgUrl + ')'
        var divStyle = {
        };

        return (
          <div className={'ImageSectionContainer'}>
              <div className={'ImageSection'} style={divStyle}></div>
          </div>
        );
    }
};

export default ImageSection;
