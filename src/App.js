import React, { Component } from "react";
import MainBox from "./components/box/MainBox";
import "./App.css";

export class App extends Component {
    render() {
        return (
            <div className='app'>
                <MainBox />
            </div>
        );
    }
}

export default App;
