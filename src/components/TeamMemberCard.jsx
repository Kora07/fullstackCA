import React, { useState } from 'react'
import "./TeamMemberCard.css"

function TeamMemberCard() {

    const [name, setName] = useState("John Doe");
    const [title, setTitle] = useState("Software Engineer");
    
    return (
        <>
            <div className="member">
                <div>
                    Name: {name}
                </div>
                <div>
                    Title: {title}
                </div>

            </div>
        </>
    )
}

export default TeamMemberCard;