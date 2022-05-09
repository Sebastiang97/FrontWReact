import React from 'react'
import {  Link, useSearchParams } from 'react-router-dom'
import { data } from '../helpers/fetch'
import { Empleo } from './Empleo'

export const Categorias = () => {
    const [query, setQuery] = useSearchParams()
    //http://localhost:3000/categorias?u=asdf
    //const query = searchParams.get("");
    const categorias = data;
    console.log(categorias);
  return (
    <div>
        <div className="row">
            <div className="col-sm-4">
                <div className="list-group m-3">
                    
                    <button 
                        type="button" 
                        className="list-group-item list-group-item-action active">
                        Salirio
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">Paises</button>
                    <button type="button" className="list-group-item list-group-item-action">Lenguajes</button>
                    <button type="button" className="list-group-item list-group-item-action">Nivel</button>
                </div>
            </div>
            <div className="col-sm-7">
                <input 
                    className='form-control m-3' 
                    type="text" 
                    placeholder='Buscar Categorias'
                    value={query.get('query') || ''}
                    onChange={(e) => {
                        let q = e.target.value;
                        if (q) {
                            setQuery({ query: q });
                        } else {
                            setQuery({});
                        }
                    }}
                />

                {
                    
                    categorias.filter((categoria) => {
                        let filter = query.get("query");
                        if (!filter) return true;
                        let name = categoria.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    }).map((categoria,i) => (
                        <Link 
                            className='text-dark text-decoration-none' 
                            key={i} to={`/empleos/${categoria.name}`}
                        >
                            <Empleo {...categoria} />
                        </Link>
                    ))
                        //http://localhost:3000/Ocean%20Avenue
                   
                }
            </div>
            
        </div>
        
    </div>
  )
}


