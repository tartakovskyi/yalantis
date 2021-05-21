import React, { useEffect, useState }  from 'react'
import { apiGetUsers } from "../api"
import Employees from './employees/Employees'
import EmployeesBirthday from './birthdays/EmployeesBirthday'


export const AppContext = React.createContext()


const App = () => {
  const [usersRaw, setUsersRaw] = useState([])
  const [usersByAlphabet, setUsersByAlphabet] = useState({})
  const [activeUsers, setActiveUsers] = useState(localStorage.getItem('activeUsers') ? localStorage.getItem('activeUsers') : [])

  useEffect(() => {
    apiGetUsers()
    .then(response => {
      setUsersRaw(response.data)
      let alphabeObj = {A:{},B:{},C:{},D:{},E:{},F:{},G:{},H:{},I:{},J:{},K:{},L:{},M:{},N:{},O:{},P:{},Q:{},R:{},S:{},T:{},U:{},V:{},W:{},X:{},Y:{},Z:{}}
      response.data.forEach(user => {
        const firstLetter = user.lastName.substr(0,1)
        alphabeObj[firstLetter][user.id] = user
      })
      setUsersByAlphabet(alphabeObj)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  const changeUserStatus = (id, active) => {
    if (active) {
      if (!activeUsers.includes(id)) setActiveUsers([...activeUsers, id])
    } else {
      setActiveUsers(activeUsers.filter(userId => userId !== id))
    }
  }

  return (
    <div className="App">
      <header>
        <div className="container">
          <a href="/">Yalantis React School</a>
        </div>  
      </header>
      <main>
        <div className="container">    
          <div className="row">
            {Object.keys(usersByAlphabet).length 
              ?
              <AppContext.Provider value={{usersRaw, usersByAlphabet, activeUsers, changeUserStatus}}>
                <Employees />
                <EmployeesBirthday />    
              </AppContext.Provider>
              :
              null   
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
