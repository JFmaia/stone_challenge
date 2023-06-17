import React from "react";
import PropTypes from 'prop-types';

export class ButtonDark extends React.Component {
    render() {
      return <button className="button-dark">{this.props.children}</button>
    }
}
ButtonDark.propTypes = {
    children: PropTypes.string.isRequired
}
