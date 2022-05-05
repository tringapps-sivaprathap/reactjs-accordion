import { useState, useEffect } from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [fetched, setFetched] = useState(false);
  const { REACT_APP_DOMAIN_NAME } = process.env;

  useEffect(() => {
    fetch(`${REACT_APP_DOMAIN_NAME}/api/users`)
      .then((response) => response.json())
      .then((items) => {
        setUsers(items.data);
        setLoaded(true);
        setFetched(true);
      })
      .catch(() => {
        setLoaded(true);
      })
  }, [REACT_APP_DOMAIN_NAME])

  return (
    <>
      <div className="header">
        <p>Employees Accordion</p>
      </div>
      {loaded ? fetched ? users.length !== 0 ? <Accordion users={users}/> : <p className="empty-error">No Users Available</p> : <p className="fetch-error">Failed to fetch</p> : <p>Loading...</p>}
    </>
  )
}

export default App