import React from 'react'
import { useParams } from 'react-router-dom';
import { buscarEmplobyName } from '../helpers/fetch';

export const DetallesEmpleos = () => {
    let params = useParams();
    //http://localhost:3000/empleos/Santa%20Monica
    // console.log(params)
    const {name,amount, due} = buscarEmplobyName(params.empleo);
    //http://localhost:3000/empleos/Tubthumper
    //http://localhost:3000/empleos/Stankonia

    return (
        <div className="card m-3">
            <h5 className="card-header">Empleador</h5>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{amount}</p>
                <p className="card-text">{due}</p>
            </div>
        </div>
    )
}
