import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function Show(props) {
    // https://www.google.com/maps/place/ + {address} 
    const post = useLoaderData()
    console.log(post)

    const date = new Date(post.createdAt)
 
    const formattedDate = date.toLocaleString('default', { month: 'long' }) + " " + date.getDate() +  ", " + date.getFullYear()
    console.log(formattedDate)

    return <div className="detailedPost">
        <div className="heading">
            <h1>{post.title}</h1>
            <h2>{post.companyName}</h2>
            <a target="_blank" href={`https://www.google.com/maps/place/${post.address.split(" ").join("+")}`}><h5>{post.address}</h5></a>
        </div>
        <div className="requirements">
            <p className="cardLabel">Skills Needed:</p>
            <ul>
                {post.qualifications.map( (skill, index) => {
                   return <li key={index}>{skill}</li> 
                })}
            </ul>
        </div>
        <div className="about">
            <p><span className="cardLabel">Job-Type:</span> {post.jobType}</p>
            <p><span className="cardLabel">Schedule:</span> {post.shift}</p>
            <p><span className="cardLabel">Job Posted:</span> {formattedDate}</p>
    
        </div>
        <div className="perks">
            <h3 className="centerTitle">Perks</h3>
            <div className="innerPerksLeft">
            <p className="centerTitle cardLabel">Benefits</p>
                <ul>
    
                    {post.benefits.map(benefit => {
                      return <li key={post.benefits.indexOf(benefit)}>{benefit}</li>  
                    })}
                </ul>
            </div>
            <div className="innerPerksRight">
                <p className="cardLabel centerTitle">Pay and More</p>
                <p><span className="cardLabel">Salary:</span> {post.salary}</p>
                <p><span className="cardLabel">Remote Availabiliy: </span> {post?.isRemote ? "Yes" : "No"}</p>
            </div>
        </div>
        <div className="jobDescription">
            <h3 className="centerTitle">Description</h3>
            <p>{post.description}</p>
            <div className="buttonLink">
                <Link to={`/users/${post._id}/apply?title=${post.title}&company=${post.companyName}`}><button>Apply Here</button></Link>
            </div>
        </div>
    </div>
};

export default Show;