import React, { Component } from "react";
import BoxItem from "./BoxItem";
import SecondaryBox from "./SecondaryBox";

class MainBox extends Component {
    state = {
        name: "India",
        info: "India is a beautiful country",
    };

    onSelect = (name, info) => {
        this.setState({
            name: name,
            info: info,
        });
    };

    render() {
        return (
            <div>
                <BoxItem
                    name='Chennai'
                    info='Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. '
                    onSelect={this.onSelect}
                />
                <BoxItem
                    name='Mumbai'
                    info='Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, its Indias largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva'
                    onSelect={this.onSelect}
                />
                <BoxItem
                    name='Delhi'
                    info='Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people.'
                    onSelect={this.onSelect}
                />
                <SecondaryBox name={this.state.name} info={this.state.info} />
            </div>
        );
    }
}

export default MainBox;
