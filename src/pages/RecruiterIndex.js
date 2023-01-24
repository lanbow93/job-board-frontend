import { useLoaderData } from "react-router-dom"
import RecruiterJobCard from "../components/RecruiterJobCard"

function RecruiterIndex(props) {
    const postings = useLoaderData()


    return <div className="jobCardHolder">
        {postings.map((post) => {
            console.log(post)
            return <div key={post._id} className="jobCard">
                <RecruiterJobCard data={post} />
            </div>   
        })}
    </div>
}

export default RecruiterIndex