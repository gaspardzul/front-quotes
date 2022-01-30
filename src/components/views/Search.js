import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from '../../utilities/Forms'
import useQuotes from "../../hooks/useQuotes";
import WebApi from "../../api/webApi";
import useFilter from "../../hooks/useFilter";
import _ from 'lodash'


const Search = () => {

    
    const [quotes, setQuotes] = useState(null)
    const [loading, setLoading] = useState(null)
    const {Quotes} = useQuotes(quotes);
    const {selectedCategories,FilterQuotes} = useFilter()
    

    useEffect(()=>{
        getQuotes()
    },[])

    useEffect(()=>{
       selectedCategories && getQuotes(_.map(selectedCategories,'value').join('&categories='))
    },[selectedCategories])

    const getQuotes=async (categories)=>{
        console.log('entra',categories)
        setLoading(true)
        try{
            const res = await WebApi.getQuotes(categories && '?categories='+categories);
            if(res.data){
                setQuotes(res.data)
            }
        }catch(e){
            setQuotes(null)
            console.log(e)
        }finally{
            setLoading(false)
        }
    }


    return(

        <div className="container g-0">
            <div className="row">
                <FilterQuotes/>
            </div>
            <div className="row">
                <Quotes/>
            </div>
    </div>
    )
}


export default Search;