import "../css/Courses.css";

function CourseData(props){
    return (
        <div className="c-card">
            <div className="c-image">
                <img src={props.image} alt=""/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default CourseData;