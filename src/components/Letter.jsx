import React  from 'react'
import Employee from './Employee'

const Letter = ({ letter, users }) => {

  const usersArr = Object.values(users).sort((a, b) => {
    if (a.lastName > b.lastName) {
      return 1
    } else if (a.lastName < b.lastName) {
      return -1
    } else return 0
  })

  return (
    <div className="col-4">
      <h3>{letter}</h3>
      {usersArr.length
        ?
        <ul className="users-list">
          {usersArr.map(user => <Employee user={user} letter={letter} key={user.id} />)}
        </ul>
        :
        <hr className="no-users" />
      }
    </div>
  )
}


export default Letter