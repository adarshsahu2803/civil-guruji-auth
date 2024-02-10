import Hero from "../components/Hero"
import HomeImg from "../assets/1.jpg"

function Home (){
    return(
        <>
        <Hero
            cName="hero"
            heroImg={HomeImg}
            title="Unlock Your Potential
            As A Civil Engineer"
            // text="Civil की बात Guruji के साथ..."
            buttonText="Explore Courses"
            url="/dest"
            btnClass="show"
        />
        </>
    );
}

export default Home;