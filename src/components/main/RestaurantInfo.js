import React from "react";

const RestaurantInfo = (props) => {
    const restaurant = props.resinfo;
    console.log({ restaurant });
    const {
        name,
        url,
        location,
        user_rating,
        phone_numbers,
        cuisines,
        menu_url,
        thumb,
    } = restaurant;
    console.log({ restaurant });
    if (props.loaded) {
        return (
            <div className='card center'>
                <h1 className='heading'>{name}</h1>
                <img src={thumb} alt='Restaurant Img' />
                <p>
                    <strong>Address </strong> {location.address}
                </p>
                <p>
                    <strong>Order Now </strong>{" "}
                    <a href={url} target='_blank'>
                        {name}
                    </a>
                </p>
                <p>
                    <strong>Contact: </strong>
                    {phone_numbers}
                </p>
                <p>
                    <strong>Cuisines</strong>
                    <ul>{cuisines}</ul>
                    <a href={menu_url}>
                        {" "}
                        <strong className='btn'>Menu</strong>
                    </a>
                </p>
                <p>
                    <strong>User Rating: {user_rating.aggregate_rating}</strong>
                </p>
                <h6>under development</h6>
            </div>
        );
    } else {
        return (
            <div className=''>
                404<h6>under development</h6>
            </div>
        );
    }
};

export default RestaurantInfo;
