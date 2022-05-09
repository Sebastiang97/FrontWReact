import React from 'react'
import { InputCustom } from './InputCustom'
import './signup.css'
export const PostularEmpleo = () => {
    return (
        <div className='d-flex justify-content-center m-3'>
            <div className="group">
                <input type="text" className="input"/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className='label'>Nombre de la empresa</label>
            </div>
            <div className="group">
                <input required="" type="text" className="input" />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className='label'>Titulo</label>
            </div>
            <div className="group">
                <input required="" type="text" className="input" />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className='label'>Salario</label>
            </div>     
            {/* <div className="group">
                <input 
                    required="" 
                    type="text-area"
                    row="3"  
                    className="input" 
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Detalles</label>
            </div>    */}
               
            <InputCustom datos={'nombre del postulante'} /> 

        </div>
    )
}

