import React, { useEffect, useState }  from 'react'
import { apiGetUsers } from "../api"
import Employees from './Employees'
import EmployeesBirthday from './EmployeesBirthday'


export const AppContext = React.createContext()
const usersByAlphabet = {A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[]}

const App = () => {

  const [users, setUsers] = useState(usersByAlphabet)

  useEffect(() => {
    apiGetUsers()
    .then(response => {
      
      setUsers(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <AppContext.Provider value={{users}}>
      <header>
        <div className="container">
          <a href="/">Yalantis React School</a>
        </div>  
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <Employees />
            </div>
            <div className="col-5">
              <EmployeesBirthday />
            </div>
          </div>
        </div>
      </main>
    </AppContext.Provider>
  )
}

export default App
