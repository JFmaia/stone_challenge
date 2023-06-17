import React from "react";
import PropTypes from 'prop-types';

export class ButtonDark extends React.Component {
    render() {
      return <button className={this.props.className === "" ? 'button-dark': this.props.className}>{this.props.children}</button>
    }
}
ButtonDark.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}
