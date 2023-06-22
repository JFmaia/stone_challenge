import React from "react";
import PropTypes from 'prop-types';

export class ButtonLight extends React.Component {
    render() {
      return <button className={this.props.className === "" ? 'button-light': this.props.className}>{this.props.children}</button>
    }
}
ButtonLight.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}

