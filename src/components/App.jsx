import React  from 'react';


export const AppContext = React.createContext();

const App = () => {

  return (

    <AppContext.Provider value={} >
      <header>
        <div className="container">
          <a href="/">Yalantis React School</a>
        </div>  
      </header>
      <main>
        <div className="container">
        <h1>Test</h1>
        </div>
      </main>
    </AppContext.Provider>
  )
}

export default App;
