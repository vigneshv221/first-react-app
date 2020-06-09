import React, { Component } from "react";
import RestaurantItem from "./RestaurantItem";

export class ListArea extends Component {
    static defaultProps = {
        restaurants: null,
    };
    render() {
        const { restaurantlist } = this.props;
        if (restaurantlist) {
            return (
                <div className='listgrid width-auto'>
                    {restaurantlist.map((restobj, index) => (
                        <RestaurantItem key={index} restaurantobj={restobj} />
                    ))}
                </div>
            );
        } else {
            return (
                <div className='listgrid width-auto'>
                    Search for Restaurants
                </div>
            );
        }
    }
}

export default ListArea;
