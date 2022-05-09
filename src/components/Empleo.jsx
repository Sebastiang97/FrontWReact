import React from 'react'

export const Empleo = ({name,amount,due,number}) => {
    //http://localhost:3000/categorias?query=Oriana
    return (
        <>
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name}</h5>
                <small>{due} 3 days ago</small>
            </div>
            <p className="mb-1">{amount}</p>
            <small>{number}</small>
        </>
    )
}
