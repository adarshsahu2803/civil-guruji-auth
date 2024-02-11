import { Link } from "react-router-dom";
import "../css/HeroStyles.css"

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt="HerpImg" src={props.heroImg} />
                <div className="hero-text">
                    <h2>{props.title1}</h2>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <Link to={props.url} className={props.btnClass}>
                        {props.buttonText}
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Hero;