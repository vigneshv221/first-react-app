import React, { Component } from "react";
import PropTypes from "prop-types";

class BoxItem extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        onSelect: PropTypes.func.isRequired,
    };

    onClick = () => {
        this.props.onSelect(this.props.name, this.props.info);
    };

    render() {
        const { name } = this.props;
        return (
            <button onClick={this.onClick} className='btn'>
                {name}
            </button>
        );
    }
}

export default BoxItem;
