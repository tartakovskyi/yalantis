import React, { useEffect, useState }  from 'react'
import { apiGetUsers } from "../api"
import Employees from './Employees'
import EmployeesBirthday from './EmployeesBirthday'


export const AppContext = React.createContext()


const App = () => {

  const [users, setUsers] = useState({})

  useEffect(() => {
    apiGetUsers()
    .then(response => {
      let usersByAlphabet = {A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[]}
      response.data.forEach(user => {
        const firstLetter = user.lastName.substr(0,1)
        usersByAlphabet[firstLetter].push(user)
      })
      setUsers(usersByAlphabet)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

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
            {Object.keys(users).length 
              ?
              <AppContext.Provider value={{users}}>
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
