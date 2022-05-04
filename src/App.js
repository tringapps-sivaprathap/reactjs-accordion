import { useState, useEffect } from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const [users, setUsers] = useState([])
  const [render, setRender] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const site = "https://reqres.in";
    fetch(`${site}/api/users`)
      .then((response) => response.json())
      .then((items) => setUsers(items.data))
      .catch((error) => {
        setRender(false);
        setErrorMessage(error.message);
      })
  }, [setRender, setErrorMessage])

  return (
    <>
      <div className="header">
        <p>Employees Accordion</p>
      </div>
      {render && <Accordion users={users}/>}
      {!render && <p className="fetch-error">{errorMessage}</p>}
    </>
  )
}

export default App