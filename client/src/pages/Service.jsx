import Hero from "../components/Hero"
import AboutImg from "../assets/1.jpg"
import Courses from "../components/Courses";

function Service (){
    return(
        <>
        <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="Service"
            btnClass="hide"
        />
        <Courses />
        </>
    )
}

export default Service;