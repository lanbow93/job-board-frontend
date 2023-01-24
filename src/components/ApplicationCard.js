import { Link } from "react-router-dom";
import { dateConverter } from "../functions/dateConverter";

function ApplicationCard(props) {
    return <div className="innerCard">
        <p><span className="cardLabel">Submitted:</span> {dateConverter(props.data.createdAt)}</p>
        <p><span className="cardLabel">Name:</span> {props.data.name}</p>
        <p><span className="cardLabel">Job ID:</span> {props.data.postID}</p>
        {props.isUser ? <Link to={`/jsapplications/${props.data._id}/edit`}>Edit Application</Link> : "" }
    </div>
}

export default ApplicationCard