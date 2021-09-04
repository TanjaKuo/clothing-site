import React from "react";
import MenuItem from "../menu-item/menuItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirecotrySections } from "../../redux/directory/directory.selector";

import "./directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...oteherSectionProps }) => (
      <MenuItem key={id} {...oteherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirecotrySections,
});

export default connect(mapStateToProps)(Directory);
