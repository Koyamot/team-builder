import React, { useState } from "react";

const Form = (props) => {
    console.log(props);
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    })
    const Change = event => {
        const newMember = {
            ...member,
            [event.target.name]: event.target.value,
        }
        setMember(newMember);
    }
    const Submit = event => {
        event.preventDefault();
        props.setTeam([...props.team, member]);
        setMember({
            name: "",
            email: "",
            role: ""
        })
    }
return (
    <div>
    <div className="form">
        <h2>Add A Team Member</h2>
        <form onSubmit={Submit}> 
            <label htmlFor="name">Name: 
            <input className="labels" type="text" id="name" name="name" placeholder="Name" value={member.name} onChange={Change}/>
            </label>
            <br />
            <label htmlFor="email">Email: 
            <input className="labels" type="email" id="email" name="email" placeholder="Email" value={member.email} onChange={Change}/>
            </label>
            <br />
            <label htmlFor="role">Role: 
            <input  className="labels" type="text" id="role" name="role" placeholder="Role" value={member.role} onChange={Change}/>
            </label>
            <br />
            <button type="submit">Submit</button>

        </form>
    </div>
    </div>
)
}

export default Form;