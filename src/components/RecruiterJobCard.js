import { Link } from "react-router-dom"
import {dateConverter} from "../functions/dateConverter"
function RecruiterJobCard(props) {
    return <div className="innerCard">
        <p><span className="cardLabel">Position:</span> {props.data.title}</p>
        <p><span className="cardLabel">Qualifications:</span> {props.data.qualifications.join(", ")}</p>
        <p><span className="cardLabel">Date Created:</span> {dateConverter(props.data.createdAt)}</p>
        <p><span className="cardLabel">Last Updated:</span> {dateConverter(props.data.updatedAt)}</p>
        <div className="linkSection">
            <Link to={`/users/${props.data._id}`}>View/Edit Posting</Link>
            <Link to={`/rapplications/${props.data._id}`}>Applications</Link>
        </div>
    </div>
} 

export default RecruiterJobCard
