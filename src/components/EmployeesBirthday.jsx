import React,  { useContext, useEffect, useState }  from 'react'
import { AppContext } from './App'


const EmployeesBirthday = () => {

  const { users } = useContext(AppContext)
  const [birthdaysByMonth, setBirthdaysByMonth] = useState({})
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  useEffect(() => {
    let activeUsers = {}

    for (let letter in users) {
      for (let userId in users[letter]) {
        const user = users[letter][userId]
        console.log(user)
        console.log(user.active)
        if (user.active === 1) {
          const month = user.dob.replace(/([0-9]+)\-([0-9]+)\-(.*)/,'$2')
          let a = activeUsers.hasOwnProperty(month)
          if (activeUsers.hasOwnProperty(month)) {
            activeUsers[month].push(user)
          } else {
            activeUsers[month] = [user]
            
          }
        }
      }
    }
    debugger
    setBirthdaysByMonth(activeUsers)
  }, [users])
  

  return (
    <div className='col-5'>
    <h2>Employees Birthday</h2>
    </div>
    
  )
}


export default EmployeesBirthday