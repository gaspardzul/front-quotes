import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import axiosApi from '../api/axiosApi'
import WebApi from '../api/webApi'
import { MultiSelect } from "react-multi-select-component";
import _ from 'lodash'

const useFilter = ()=>{

    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelected] = useState([]);

    useEffect(()=>{
        getCategories()
    },[])

    const getCategories= async ()=>{
        try {
            const res = await WebApi.getCategories()
            if(res.data){
                setCategories(res.data)
            }
        } catch (error) {
            
        }
    }
    const cleanData = (cat)=>{
        return {value:cat.id, label:cat.name}
    }


    const FilterQuotes=()=>{
        return <div className="row mt-5">
            <form className='col-12'>
                <div className='row'>
                    <div className='col-12 '>
                        <MultiSelect
                            options={categories && _.map(categories, cleanData)}
                            value={selectedCategories}
                            onChange={setSelected}
                            labelledBy="Elige una categoría"
                        />
                    </div>
                </div>
            </form>          
        </div>
    }

    return {
        selectedCategories,
        FilterQuotes
    }
}


export default useFilter;