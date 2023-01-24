import { useLoaderData } from "react-router-dom"
import RecruiterJobCard from "../components/RecruiterJobCard"

function Index(props) {
    const postings = useLoaderData()
    return <div className="jobCardHolder">
        {postings.map((post) => {
            return <div key={post._id} className="jobCard">
                <RecruiterJobCard data={post} />
            </div>   
        })}
    </div>
}

export default Index