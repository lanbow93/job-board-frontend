import { Form, useParams } from "react-router-dom"

function NewAppForm(props){
    const queries = new URLSearchParams(window.location.search)
    const {id} = useParams()
    return <div className="applicationFormPage">
        

        <form action="" className="split">
            <h4 className="centerTitle">Applying for {queries.get("title")} @ {queries.get("company")}</h4>
            <label className="required">Name: </label>
            <input type="text" name="name" placeholder="John Smith"/>
            <label >Number: </label>
            <input type="text" name="number" placeholder="(XXX) - XXX - XXXX"/>
            <label className="required">Email: </label>
            <input type="text" name="email" placeholder="email@email.com"/>
            <label >LinkedIn URL: </label>
            <input type="text" name="linkedin" placeholder="linkedinurl.com"/>
            <label className="required"> Resume: </label><br />
            <textarea rows="10" cols="100" />
            <input type="hidden" value={id} />
            <input type="submit" value="Submit Application" />
            <p>Bolded Items are <span className="required">REQUIRED</span></p>
            <p>Job ID: {id}</p>
            
        </form>
        
    </div>
}

export default NewAppForm

