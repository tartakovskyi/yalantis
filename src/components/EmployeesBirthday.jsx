import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './App'
import Month from './Month'


const EmployeesBirthday = () => {

  const { users } = useContext(AppContext)
  const [birthdaysByMonth, setBirthdaysByMonth] = useState({})
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  useEffect(() => {
    let activeUsers = {}
    console.time('birthdays')
    for (let letter in users) {
      for (let userId in users[letter]) {
        const user = users[letter][userId]
        if (user.active === 1) {
          const month = user.dob.replace(/([0-9]+)-([0-9]+)-(.*)/,'$2')
          if (activeUsers.hasOwnProperty(month)) {
            activeUsers[month].push(user)
          } else {
            activeUsers[month] = [user]
            
          }
        }
      }
    }
    console.timeEnd('birthdays')
    setBirthdaysByMonth(activeUsers)
  }, [users])

  const birthdaysArr = Object.keys(birthdaysByMonth).sort() 

  return (
    <div className='col-5'>
      <h2>Employees Birthday</h2>
      {birthdaysArr.length 
        ?
        <ul className="birthdays-list">
          {birthdaysArr.map(month => <Month name={monthNames[month - 1]} users={setBirthdaysByMonth[month]} key={month} />)}
        </ul>
        :
        <p>Employees List is empty</p>   
      }
    </div>
    
  )
}


export default EmployeesBirthday