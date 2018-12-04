import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
  map:{
    position:'absolute',
    width:'100%',
    height:'100%'
  }
};

export class CurrentLocation extends React.Component{
constructor(props){
  super(props);
  const {lat,lng} = this.props.initialCenter;
  this.state = {
    currentLocation:{
      lat:lat,
      lng:lng
    }
  };
}
componentDidUpdate(prevProps,prevState){
  if(prevProps.google !== this.props.google){
    this.loadMap();
  }
  if(prev.State.currentLocation !== this.state.currentLocation){
    this.recenterMap();
  }
}
recenterMap(){
  const map = this.map;
  const current = this.state.currentLocation;
  const google = this.props.google;
  const maps = google.maps;
  console.log(maps);
  if(map){
    let center = new maps.LatLng(current.lat,current.lng);
    map.panTo(center);
  }
}
render(){
  return(
    <div>

    </div>
  )
}

}


export default CurrentLocation;

CurrentLocation.defaultProps = {
    zoom:14,
    initialCenter:{
      lat:-1.2884,
      lng:36.888
    },
    centerAroundCurrentLocation:false,
    visible:true

};
