import Hero from "../components/Hero"
import AboutImg from "../assets/1.jpg"

function About() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
    </>
  )
}

export default About;