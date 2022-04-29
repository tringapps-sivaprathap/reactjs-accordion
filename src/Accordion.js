import { useState } from "react";

const Accordion = ({ users }) => {
	const [clicked, setClicked] = useState(null)
    const toggle = (user) => {
        // if clicked second time {display nothing} else {display correspnding}
        if(clicked === user.id) {
            setClicked(null)
            localStorage.removeItem("currentuser")
        }
        else {
            setClicked(user.id)
            localStorage.setItem("currentuser", JSON.stringify(user))
        }
    }

    return (
        <> 
            {users.map((user) => {
                return (
                    <div key={user.id} className="accordion">
                        <div onClick = {() => {toggle(user)}}
                        className="accordion-button">
                            <span>{user.first_name}</span>
                            {clicked === user.id ? <span>&#11165;</span> : <span>&#11167;</span>}
                        </div>

                        {clicked === user.id && (<div className="accordion-content">
                            <img src={user.avatar} alt={user.first_name} />
                            <div className="details">
                                <div>
                                    <span className="details-labels">First Name:</span>{" "}
                                    <span>{user.first_name}</span>
                                </div>
                                <div>
                                    <span className="details-labels">Last Name:</span>{" "}
                                    <span>{user.last_name}</span>
                                </div>
                                <div>
                                    <span className="details-labels">Email:</span>{" "}
                                    <span>{user.email}</span>
                                </div>
                            </div>
                        </div>)}
                    </div>
                )
            })}
        </>
    )
}

export default Accordion