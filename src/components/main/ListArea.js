import React, { Component } from "react";
import RestaurantItem from "./RestaurantItem";

export class ListArea extends Component {
    static defaultProps = {
        restaurants: null,
    };
    render() {
        const { restaurantlist, getinfo } = this.props;
        if (restaurantlist) {
            return (
                <div className='listgrid width-80'>
                    {restaurantlist.map((restobj, index) => (
                        <RestaurantItem
                            key={index}
                            restaurantobj={restobj}
                            getinfo={getinfo}
                        />
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
