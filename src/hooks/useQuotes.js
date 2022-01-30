import React from 'react'
import { useEffect } from 'react'
import axiosApi from '../api/axiosApi'
import _ from 'lodash'

const useQuotes = (quotes)=>{
    const Quotes=()=>{
        return <div className="row mt-5">
            {
                quotes && quotes.map((q, i)=>{
                    return <div key={i} className="col-4 mb-2"  >
                        <div className="card" style={{minHeight:'300px'}}>
                            <div className="card-body">
                                <h5 className="card-title">{q.name}</h5>
                                <p className="card-text">{q.description}</p>
                                <small>status: {q.status}</small><br/>
                                <small>Asesor: {q.adviser && q.adviser.nombre}</small>   <br/>
                                {
                                    q.categories && _.map(q.categories,(cat,i)=>{
                                        return <small style={{color:cat.color,...stylesCategory}}>{cat.name}</small>
                                    })
                                }
                                
                                
                            </div>
                            <div className="card-footer">
                            <a target='_blank' href={q.quote_file && `${axiosApi.urlBase}${q.quote_file.url}`} className="btn d-block btn-primary">Ver documento</a>
                            </div>

                        </div>
                    
                    </div>
                })
            }            
        </div>
    }

    return {
        Quotes
    }
}

const stylesCategory={border:'1px solid gray',background:'#e9ecef', borderRadius:10,padding:2,marginRight:5,fontSize:10}

export default useQuotes;