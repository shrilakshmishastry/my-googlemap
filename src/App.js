import React, { Component } from 'react';
import {Map,GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react';

const mapStyle ={
  width :'100%',
  height:'100%'
};

export class App extends Component {
  state={
    showingInfoWindow:false,
    activeMarker:{},
    selectedPlace:{}
  };
  onMarkerClick = (props,marker,e)=>{
    this.setState({
      showingInfoWindow:true,
      activeMarker:marker,
      selectedPlace:props
    });
  }
  onClose = (props)=>{
    if(this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow:false,
        activeMarker:null
      });
    }
  }
render() {
    return (
        <Map
            google={this.props.google}
            zoom={14}
            style={mapStyle}>
        <Marker onClick={this.onMarkerClick} name={'India'} />
        <InfoWindow
         marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}>
          <div>
            <h4>
              {this.state.selectedPlace.name}
            </h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:''
})(App);
