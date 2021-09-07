import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 4.60971, lng: -74.08175
    },
    zoom: 8
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAGsw3PmABM5k5Ixt1FUvhwuj7AA9CKD-U' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={4.609713}
            lng={-74.08148}
            text="Turkish TV"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
