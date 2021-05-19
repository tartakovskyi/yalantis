import React  from 'react'
import Employee from './Employee'

const Letter = ({ letter, users }) => {

  return (
    <div className="col-4">
      <h3>{letter}</h3>
      {users.length
        ?
        <ul className="users-list">
          {users.map(user => <Employee user={user} key={user.id} />)}
        </ul>
        :
        <hr className="no-users" />
      }
    </div>
  )
}


export default Letter