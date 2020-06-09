import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Search from "./components/main/Search";
import ListArea from "./components/main/ListArea";
import axios from "axios";
import "./App.css";

const apikey = process.env.API_KEY;

const config = { headers: { "user-key": apikey } };

export class App extends Component {
    state = {
        latitude: 0,
        longitude: 0,
        restaurants: null,
        loaded: false,
        alert: null,
    };

    async componentDidMount() {
        console.log("Getting location");
        this.getLocation();
    }

    /*componentDidUpdate(_prevProps, prevState) {
        if (
            prevState.longitude !== this.state.longitude &&
            prevState.latitude !== this.state.latitude
        ) {
            console.log("getting restaurants");
            this.getRestaurants();
        }
    }*/

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState(
                    {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                    () =>
                        console.log(
                            "Latitude: " +
                                this.state.latitude +
                                "\nLongitude: " +
                                this.state.longitude
                        )
                );
            });
        }
    };

    getRestaurants = (lat, lon) => {
        console.log("sending request");
        this.setState({ loaded: false });
        axios
            .get(
                `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`,
                config
            )
            .then((res) => {
                console.log("api response");
                this.setState(
                    { restaurants: res.data.nearby_restaurants },
                    () => {
                        console.log("state set");
                        this.setState({ loaded: true });
                    }
                );
            })
            .catch((err) => console.log(err));
    };

    showAlert = (msg) => {
        this.setState({ alert: msg });

        setTimeout(() => {
            this.setState({ alert: null });
        }, 5000);
    };

    render() {
        const { latitude, longitude, alert } = this.state;
        return (
            <div style={{ marginTop: "0px", paddingTop: "0px" }}>
                <Navbar />
                <Alert alert={alert} />
                <Search
                    getRestaurants={this.getRestaurants}
                    lat={latitude}
                    lon={longitude}
                    getLocation={this.getLocation}
                    showAlert={this.showAlert}
                />
                <ListArea
                    restaurantlist={
                        this.state.loaded ? this.state.restaurants : null
                    }
                />
            </div>
        );
    }
}

export default App;
