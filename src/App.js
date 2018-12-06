import React, { Component } from 'react';
import {Map,GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react';
import CurrentLocation from './Map.js';

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
    const {google }= this.props;
    console.log(google.maps);

    console.log(google.maps.LatLng());

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
      <CurrentLocation
     centerAroundCurrentLocation
     google={this.props.google} >
     <Marker onClick={this.onMarkerClick} name={'current location'} />
     <InfoWindow
       marker={this.state.activeMarker}
       visible={this.state.showingInfoWindow}
       onClose={this.onClose}>
       <div>
         <h4>{this.state.selectedPlace.name}</h4>
       </div>
     </InfoWindow>
   </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:''
})(App);
