import React  from 'react'
import Employee from './Employee'

const Letter = ({ letter, users }) => {

  const userIdArr = Object.keys(users)

  return (
    <div className="col-4">
      <h3>{letter}</h3>
      {userIdArr.length
        ?
        <ul className="users-list">
          {userIdArr.map(id => <Employee user={users[id]} letter={letter} key={id} />)}
        </ul>
        :
        <hr className="no-users" />
      }
    </div>
  )
}


export default Letter