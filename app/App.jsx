import React, {Component} from 'react';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import NavBar from './layout/NavBar.jsx';
import Section from './layout/Section.jsx';
import Data from './data/Sections.json';
import ImageSection from './layout/ImageSection.jsx';
import Fonts from './assets/styles/global.css';

class App extends Component {
  render() {
    console.log(Data);
    var sections = Data.map((section, i) => {
      return section.title;
    });
    console.log(sections);

    return (
      <div>
        <Header sections={sections}/>
        {sections.map((name, i) =>
          <div>
            <ImageSection index={i} key={'image_section' + i}/>
            <Section key={'section' + i} id={sections[i]} index={i} panels={Data[i].panels} sectionImage={Data[i].backgroundImage} name={sections[i]}/>
          </div>
      )}
      </div>
    );
  }
};

export default App;
