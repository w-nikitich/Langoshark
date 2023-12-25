import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";

class Home extends React.Component {
    render() {
        return(
            <div id="home">
                <Intro/>
                <About/>
            </div>
        )
    }
}

export default Home;