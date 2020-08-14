import React from "react";

const Member = (props) => {
    return (
        
        <div className="flex-card">
            {props.team.map((member) => {
                return (
                    <div className="card">
                        <h4>{member.name}</h4>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                );
            })}
        </div>
    
    )
}

export default Member