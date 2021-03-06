import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import "./shop-location.scss";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ShopLocation extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={
            {
              /* google api key */
            }
          }
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default ShopLocation;
