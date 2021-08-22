import React from "react";
import MenuItem from "./menu-item/menu-item.component";
import "./main-menu.styles.scss";

import { createStructuredSelector } from "reselect";
import { selectMenuSections } from "../../redux/menu/menu-selector";
import { connect } from "react-redux";

const MainMenu = ({ sections }) => {
  return (
    <div className="main-menu">
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} {...sectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSections,
});

export default connect(mapStateToProps)(MainMenu);
