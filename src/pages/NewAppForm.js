import { Form, useParams } from "react-router-dom"
import { useState } from "react"

function NewAppForm(props){
    const queries = new URLSearchParams(window.location.search)
    const {id} = useParams()
    const [formInfo, setFormInfo] = useState ({
        name: "",
        number: "",
        email: "",
        linkedin: "",
        resume: "",
        id: id

    })


    return <div className="applicationFormPage">
        

        <Form action="/create/users" method="post" className="split">
            <h4 className="centerTitle">Applying for {queries.get("title")} @ {queries.get("company")}</h4>
            <label className="required">Name: </label>
            <input type="text" name="name" placeholder="John Smith" value={formInfo.name} onChange={event => setFormInfo({...formInfo, name: event.target.value})} />
            <label >Number: </label>
            <input type="text" name="number" placeholder="(XXX) - XXX - XXXX" value={formInfo.number} onChange={event => setFormInfo({...formInfo, number: event.target.value})}/>
            <label className="required">Email: </label>
            <input type="text" name="email" placeholder="email@email.com" value={formInfo.email} onChange={event => setFormInfo({...formInfo, email: event.target.value})} />
            <label >LinkedIn URL: </label>
            <input type="text" name="linkedin" placeholder="linkedinurl.com" value={formInfo.linkedin} onChange={event => setFormInfo({...formInfo, linkedin: event.target.value})}/>
            <label className="required"> Resume: </label><br />
            <textarea rows="10" cols="100" name="resume" value={formInfo.resume} onChange={event => setFormInfo({...formInfo, resume: event.target.value})}/>
            <input type="hidden" value={formInfo.id} name="postID" />

            
            {(formInfo.name && formInfo.email && formInfo.resume) ? <input type="submit" value="Submit Application"  /> : <input type="submit" value="Submit Application" disabled />}

            <p>Bolded Items are <span className="required">REQUIRED</span></p>
            <p>Job ID: {formInfo.id}</p>
            
        </Form>
        
    </div>
}

export default NewAppForm

