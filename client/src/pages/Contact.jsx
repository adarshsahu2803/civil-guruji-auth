import Hero from "../components/Hero"
import AboutImg from "../assets/1.jpg"

function Contact() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
}

export default Contact;