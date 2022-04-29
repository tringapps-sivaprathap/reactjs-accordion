import React, { useState, useEffect } from 'react'
import Accordion from './Accordion'

const App = () => {
  const [users, setUsers] = useState([]);
  // initiate usestate with an empty string (cause map() needs an array)
  
  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((items) => setUsers(items.data))
  }, [])

  return (
    <>
      <div className='header'><p>Employees Accordion</p></div>
      {users.map((user) => {return <Accordion key={user.id} user={user} />})}
    </>
  )
}

export default App