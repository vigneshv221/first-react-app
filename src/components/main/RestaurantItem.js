import React from "react";

const RestaurantItem = ({ restaurantobj }) => {
    const restaurant = restaurantobj.restaurant;
    console.log(`Rendering ${restaurant.name}`);
    return (
        <div className='card'>
            <h1 className='heading'>{restaurant.name}</h1>
            <p>Cuisine: {restaurant.cuisines}</p>
            <p>Price for two: {restaurant.average_cost_for_two}</p>
        </div>
    );
};

export default RestaurantItem;
