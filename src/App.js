import React, { Component } from 'react';
import Header from './Components/Header';
import Grid from './Components/Grid';
import About from './Components/About';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArray: [
        'dec2_1.jpg',
        'dec2_2.jpg',
        'dec2_3.jpg',
        'DSC_0004.jpg',
        'DSC_0021.jpg',
        'DSC_0037.jpg',
        'gayPrideParade.jpg',
        'gayPrideParade46.jpg',
        'gayPrideParade89.jpg',
        'image1.jpg',
        'image2.jpg',
        'image40.jpg',
        'image43.jpg',
        'image49.jpg',
        'image51.jpg',
        'image65.jpg',
        'image77.jpg',
        'image84.jpg',
        'image86.jpg',
        'IMG_0129.jpeg',
        'IMG_0147.jpg',
        'IMG_0289.jpg',
        'IMG_0290.jpg',
        'IMG_0308.jpeg',
        'IMG_0311.jpeg',
        'IMG_0315.jpeg',
        'IMG_0321.jpg',
        'IMG_0322.jpg'
      ]
    };
  }

  setImgWidth() {
    const widthArr = ['300px', '500px'];
    let ndx = Math.floor(Math.random() * 2);
    return widthArr[ndx];
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h2>Gallery</h2>
        <Grid
          setImgWidth={this.setImgWidth.bind(this)}
          images={this.state.imgArray}
        />
        <About />
      </div>
    );
  }
}
