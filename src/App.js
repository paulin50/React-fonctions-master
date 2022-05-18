import React, { Component } from 'react';
import classes from './App.module.css';
import ProductData from './ProductData';
import ProductDetails from './ProductDetails';
import ProductPreview from './ProductPreview';
import Topbar from './Topbar';

class App extends Component {
  state = {
    ProductData: ProductData,
    currentPreviewImagePos: 0,
    //showHeartBeatSection: false,
    currentSelectedFeature: 0,
  }

  onColorOptionClick = (pos) => {
    //const updatedPreviewImage = this.state.ProductData.colorOptions[pos].imageUrl;
    //console.log(updatedPreviewImage);
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {
    // let updateState = false;
    // if(pos === 1) {
    //   updateState = true;
    // }
    this.setState({currentSelectedFeature: pos})
    //console.log(pos);
  }

  render() {
    return (
      <div className="App">
        
          <Topbar/>
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.ProductData.colorOptions
            [this.state.currentPreviewImagePos].imageUrl}
            currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>
  
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.ProductData} onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
