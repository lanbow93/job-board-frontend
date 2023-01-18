import { Link } from "react-router-dom";

function ApplicationCard(props) {
    return <div className="innerCard">
        <p><span className="cardLabel">Job ID:</span> {props.data.postID}</p>
        <p><span className="cardLabel">Submitted:</span> {props.data.createdAt}</p>
        <p><span className="cardLabel">Name:</span> {props.data.name}</p>
        <Link to={`/users/${props.data._id}`}>Full Details</Link>
    </div>
}

export default ApplicationCard