import React, { Component } from "react";
import PropTypes from "prop-types";

class SecondaryBox extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
    };

    static defaultProps = {
        name: "Item name",
        info: "Item info",
    };

    render() {
        const { name, info } = this.props;
        return (
            <div>
                <div className='titlebox'>{name}</div>
                <div className='infobox'>{info}</div>
            </div>
        );
    }
}

export default SecondaryBox;
