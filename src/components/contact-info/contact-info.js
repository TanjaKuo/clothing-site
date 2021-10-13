import React from "react";
import ShopLocation from "../shop-location/shop-location";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import map from "../../assets/1_vGn1E23v1sm6CyKMOM6zQQ.png";

import "./contact-info.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-info">
        <p className="info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icons" />
          50 Bourke St, Melbourne VIC 3000
        </p>
        <p className="info">
          <FontAwesomeIcon icon={faMobileAlt} className="icons" />
          04230405060
        </p>
        <p className="info">
          <FontAwesomeIcon icon={faPhone} className="icons" />
          0312323434
        </p>
        <div>
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            color="#E1306C"
            className="social-icon"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            size="lg"
            color="#4267B2"
            className="social-icon"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            color="#1DA1F2"
            className="social-icon"
          />
        </div>
      </div>
      <div className="contact-info-map">
        {/* <img src={map} alt="map" className="map" /> */}
        <ShopLocation className="map" />
      </div>
    </div>
  );
};

export default ContactInfo;
