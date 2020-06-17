import React from "react";
import { Link } from "react-router-dom";

const RestaurantItem = ({ restaurantobj, getinfo }) => {
    const restaurant = restaurantobj.restaurant;
    console.log(`Rendering ${restaurant.name}`);
    return (
        <div className='card'>
            <h1 className='heading'>{restaurant.name}</h1>
            <img src={restaurant.thumb} alt='Img' />
            <p>
                Cuisine: <strong>{restaurant.cuisines}</strong>
            </p>
            <p>
                Price for two:
                <strong>&#8377; {restaurant.average_cost_for_two}</strong>
            </p>

            <Link to={`/${restaurant.id}`}>
                <button
                    className='btn width-20'
                    onClick={async () => {
                        await getinfo(restaurant.id);
                    }}
                >
                    More
                </button>
            </Link>
        </div>
    );
};

export default RestaurantItem;
