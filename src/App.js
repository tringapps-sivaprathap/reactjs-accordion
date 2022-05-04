import { useState, useEffect } from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const site = "https://reqres.in";
    fetch(`${site}/api/users`)
      .then((response) => response.json())
      .then((items) => setUsers(items.data))
  }, [])

  return (
    <>
      <div className="header">
        <p>Employees Accordion</p>
      </div>
      <Accordion users={users}/>
    </>
  )
}

export default App