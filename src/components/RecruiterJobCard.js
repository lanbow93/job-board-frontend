import { Link } from "react-router-dom"

function RecruiterJobCard(props) {
    return <div className="innerCard">
        <p><span className="cardLabel">Position:</span> {props.data.title}</p>
        <p><span className="cardLabel">Qualifications:</span> {props.data.qualifications.join(", ")}</p>
        <p><span className="cardLabel">Address:</span> {props.data.address}</p>
        <Link to={`/users/${props.data._id}`}>Submitted Applications</Link>
    </div>
} 

export default RecruiterJobCard
