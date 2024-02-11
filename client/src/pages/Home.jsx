import Hero from "../components/Hero"
import HomeImg from "../assets/1.jpg"
import React, { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";
import Courses from "../components/Courses";

function Home (){
    const userObj = useContext(UserContext);
    const user = (userObj)? `Welcome back, ${userObj.userName}`: "Welcome back";

    return(
        <>
        <Hero
            cName="hero"
            heroImg={HomeImg}
            title="Unlock Your Potential
            As A Civil Engineer"
            title1={user}
            // text="Civil की बात Guruji के साथ..."
            buttonText="Explore Courses"
            url="/service"
            btnClass="show"
        />
        <Courses />
        </>
    );
}

export default Home;