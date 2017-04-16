import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import Slider from './Slider.jsx';
import HeaderArrow from './HeaderArrow';

class Header extends Component {
    render() {

        return (
            <div className={'Header'}>
                <Slider></Slider>
                <NavBar sections={this.props.sections}/>
                <HeaderArrow />
            </div>
        );
    }
};

export default Header;
