import React, { useState }  from 'react'


const Employee = ({user:{id, firstName, lastName}}) => {

  const [active, setActive] = useState('0');

  const onChangeValue = e => {
    setActive(e.target.value)
  }

  return (
    <li className="employee">
      <h4 className="employee__name">{firstName} {lastName}</h4>
      <form>
        <label className="form-check">
          <input 
            type="radio"
            name={`active_${id}`}
            value="0"
            id={`notActive_${id}`}
            className="form-check-input"
            onChange={onChangeValue}
            checked={active === '0'}
          />
          <span className="form-check-label">not active</span>
        </label>
        <label className="form-check">  
          <input 
            type="radio"
            name={`active_${id}`}
            value="1"
            id={`active_${id}`}
            className="form-check-input"
            onChange={onChangeValue}
            checked={active === '1'}
          />
          <span className="form-check-label">active</span>
        </label>
      </form>
    </li>
  )
}


export default Employee

