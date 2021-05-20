import React  from 'react'


const Birthday = ({ user:{dob, firstName, lastName} }) => {

  return (
    <li>{firstName} {lastName}</li>
  )
}


export default Birthday