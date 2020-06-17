import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Search from "./components/main/Search";
import ListArea from "./components/main/ListArea";
import RestaurantInfo from "./components/main/RestaurantInfo";
import axios from "axios";
import "./App.css";
import RestaurantItem from "./components/main/RestaurantItem";

const apikey = process.env.REACT_APP_API_KEY;

const config = { headers: { "user-key": apikey } };

export class App extends Component {
    state = {
        latitude: 0,
        longitude: 0,
        restaurants: null,
        restaurant: [],
        loaded: false,
        alert: null,
    };

    async componentDidMount() {
        console.log("Getting location");
        this.getLocation();
    }

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

    getResDetail = async (resid) => {
        this.setState({ loaded: false });
        axios
            .get(
                `https://developers.zomato.com/api/v2.1/restaurant?res_id=${resid}`,
                config
            )
            .then((res) => {
                this.setState({ restaurant: res.data }, () => {
                    this.setState({ loaded: true });
                });
            });
    };

    render() {
        const { latitude, longitude, alert } = this.state;
        return (
            <Router>
                <div style={{ marginTop: "0px", paddingTop: "0px" }}>
                    <Switch>
                        <Route exact path='/:resid'>
                            <RestaurantInfo
                                resinfo={this.state.restaurant}
                                loaded={this.state.loaded}
                            />
                        </Route>
                        <Route exact path='/'>
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
                                    this.state.loaded
                                        ? this.state.restaurants
                                        : null
                                }
                                getinfo={this.getResDetail}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
