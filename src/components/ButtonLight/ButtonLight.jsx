import React from "react";
import PropTypes from 'prop-types';

export class ButtonLight extends React.Component {
    render() {
      return <button className="button-light">{this.props.children}</button>
    }
}
ButtonLight.propTypes = {
    children: PropTypes.string.isRequired
}

