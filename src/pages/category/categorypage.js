import React from "react";

import CollectionItem from "../../components/collection-item/collection-item";

import "./categorypage.scss";

const CategoryPage = ({ match }) => {
  console.log("2", match.params.categoryId);
  return (
    <div className="category">
      <h2>category page</h2>
    </div>
  );
};

export default CategoryPage;
