import React, {Component} from 'react';
import SmoothScroll from './SmoothScroll';

class NavBar extends Component {
    render() {
        var self = this;
        var i = 1;
        console.log('in navbar ' + this.props.sections);
        return (
            <div className={'NavBar'}>
              {this.props.sections.map((name, i) =>
                <div>
                  <SmoothScroll section={self.props.sections[i]} className={'NavBarItem'}>
                    {self.props.sections[i]}
                  </SmoothScroll>
                </div>
              )}
            </div>
        );
    }
};

export default NavBar;
