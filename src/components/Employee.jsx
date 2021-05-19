import React  from 'react'


const Employee = ({user:{id, firstName, lastName}}) => {

  return (
    <li className="employee">
      <h4 className="employee__name">{firstName} {lastName}</h4>
      <form>
        <div className="form-check">
          <input type="radio" name={`active_${id}`} onChange={e => console.log(e.target.value)} value="0" id={`notActive_${id}`} className="form-check-input" checked />
          <label htmlFor={`notActive_${id}`} className="form-check-label">not active</label>
        </div>
        <div className="form-check">  
          <input type="radio" name={`active_${id}`} onChange={e => console.log(e.target.value)} value="1" id={`active_${id}`} className="form-check-input"/>
          <label htmlFor={`active_${id}`} className="form-check-label">active</label>
        </div>
      </form>
    </li>
  )
}


export default Employee

