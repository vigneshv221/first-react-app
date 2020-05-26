import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

export class App extends Component {
    state = {
        latitude: "",
        longitude: "",
    };

    async componentDidMount() {
        console.log("Getting location");
        this.getLocation();
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                console.log(
                    "Latitude: " +
                        this.state.latitude +
                        "\nLongitude: " +
                        this.state.longitude
                );
            });
        }
    };

    render() {
        return (
            <div style={{ marginTop: "0px", paddingTop: "0px" }}>
                <Navbar />
                <h1 className='mainbody heading'>Welcome to FoodFinder App</h1>
                <p className='mainbody text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet doloremque earum possimus assumenda aperiam nam
                    quibusdam nobis voluptate temporibus sint, vitae accusantium
                    rem quo corrupti soluta natus sapiente. Hic, iure?
                </p>
            </div>
        );
    }
}

export default App;
