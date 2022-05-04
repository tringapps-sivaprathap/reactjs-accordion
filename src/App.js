import { useState, useEffect } from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const [users, setUsers] = useState([])
  const [showAccordion, setShowAccordion] = useState(true)
  const { REACT_APP_DOMAIN_NAME } = process.env;

  useEffect(() => {
    fetch(`${REACT_APP_DOMAIN_NAME}/api/users`)
      .then((response) => response.json())
      .then((items) => setUsers(items.data))
      .catch(() => {
        setShowAccordion(false);
      })
  }, [REACT_APP_DOMAIN_NAME, setShowAccordion])

  return (
    <>
      <div className="header">
        <p>Employees Accordion</p>
      </div>
      {showAccordion ? users.length === 0 ? <p className="empty-error">No Users Available</p> : <Accordion users={users}/> : <p className="fetch-error">Failed to fetch</p>}
    </>
  )
}

export default App