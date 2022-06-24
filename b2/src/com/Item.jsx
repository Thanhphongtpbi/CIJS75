import React from 'react'

export const Item = (props) => {
  return (
    <div className='item'>
        <input className='inputitem' type="radio"></input><label>{props}</label>
    </div>
  )
}
