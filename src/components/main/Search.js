import React, { Component } from "react";

export class Search extends Component {
    render() {
        const { lat, lon, getRestaurants, showAlert } = this.props;

        return (
            <div className='center width-auto my-1'>
                <button
                    onClick={() => {
                        lat && lon
                            ? getRestaurants(lat, lon)
                            : showAlert("Please allow location permission");
                    }}
                    className='btn width-full'
                >
                    Search
                </button>
            </div>
        );
    }
}

export default Search;
