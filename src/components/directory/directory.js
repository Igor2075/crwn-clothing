import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/MenuItem";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
