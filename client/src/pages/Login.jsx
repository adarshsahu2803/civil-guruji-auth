import Hero from "../components/Hero"
import login from "../assets/1.jpg"
import LoginForm from "../components/LoginFrom.jsx";

function Login (){
    return(
        <>
        <Hero
            cName="hero-mid"
            heroImg={login}
            title="Login"
            btnClass="hide"
        />
        <LoginForm />
        </>
    );
}

export default Login;