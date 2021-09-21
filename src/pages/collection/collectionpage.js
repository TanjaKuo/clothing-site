import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/shop.selector";

import "./collectionpage.scss";

const CollectionPage = ({ match, collections }) => {
  const { title, items } = collections;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToprops = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
});

// ownProps is the props of component that wrap in our connect
// unlike other selectors, this selector needs a part of the state depending on the URL parameters

export default connect(mapStateToprops)(CollectionPage);
