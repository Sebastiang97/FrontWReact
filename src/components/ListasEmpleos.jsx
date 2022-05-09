import React from 'react'
import { NavLink } from 'react-router-dom';
import { data } from '../helpers/fetch'
import { Empleo } from './Empleo';

export const ListasEmpleos = () => {
  const empleos = data;
  return (
    
    <div className='row m-3'>
      <div className="col-sm 12">
        <div className="list-group">
          {
            empleos.map((empleo,i)=> (
            <NavLink 
              key={i} to={`/empleos/${empleo.name}`}
              className="list-group-item list-group-item-action m-3"
            >
              <Empleo {...empleo}/>
            </NavLink>
            ))
          }
        </div>
      </div>
    </div>
    
  )
}
