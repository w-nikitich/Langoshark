import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
import Intro from "../components/Intro";
import About from "../components/About";
import BubbleAnimation from "../components/BubbleAnimation";


function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/profile/', { withCredentials: true})
            .then((res) => {
                if (res.data) {
                    navigate('/profile')
                }
            })
            .catch((error) => {
                navigate('/');
            })
    }, []);

    return(
        <div id="home">
            <BubbleAnimation/>
            <Intro/>
            <About/>
        </div>
    )

}

export default Home;