import { useState } from "react"

const Accordion = ({ user }) => {
    const [show, setShow] = useState(false)

    return (
    <div className="accordion">
        <div onClick={() => {
            setShow(!show)
            localStorage.setItem("currentuser", JSON.stringify(user))
        }} className="accordion-button">
            <span>{user.first_name}</span>
            {show ? <span>&#11165;</span> : <span>&#11167;</span>}
        </div>

        {show && <div className="accordion-content">
            <img src={user.avatar} alt={user.first_name} />
            <div className="details">
                <div><span className="details-labels">First Name:</span> <span>{user.first_name}</span></div>
                <div><span className="details-labels">Last Name:</span> <span>{user.last_name}</span></div>
                <div><span className="details-labels">Email:</span> <span>{user.email}</span></div>
            </div>
        </div>}
    </div>
    )
}

export default Accordion