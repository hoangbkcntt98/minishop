import React, { useState,useEffect } from "react";
import Autosuggest from "react-autosuggest";
import SearchIcon from '@mui/icons-material/Search'
import productData from '../../../../assets/fake-data/products'
import category from '../../../../assets/fake-data/category'
import { SuggestionItem } from "./SuggestionItem";
import { useSelector,useDispatch } from "react-redux";
import { filterSelectRedux } from "../../../../redux/product/ProductSlice";

import { useHistory } from "react-router";
const AutoSuggest = () => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestion] = useState([])
    const products = productData.getAllProducts()
    const filterState = useSelector((state) => state.product.filter)
    const dispatch = useDispatch()
    const history = useHistory();
    useEffect(() => {
        console.log(filterState)
    }, [filterState])
    // useEffect(() => {
    //     console.log(value)
       
    // }, [value])
    const handleSubmit = () =>{
        // alert(value)
        dispatch(filterSelectRedux({type:"NAME",checked:true,item:value}))
        history.push('/catalog')
    }
    // console.log(products)
    var data = []
   
    data = category.map(cate => {
        let productCate = products.filter(p => p.categorySlug == cate.categorySlug)
        productCate = productCate.map(item => {
            return {
                name: item.title,
                price: item.price,
                img:item.image01
            }


        })
        return {
            title: cate.display,
            products: productCate
        }
    })
    // console.log(data)

    function getSuggestions(value) {
        let rs = data.filter(lang =>{
            let products = lang.products.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
            if(products.length>0) return lang
        })
        console.log(rs)
        return rs;
    }

    function getSuggestionValue(suggestion) {
        return suggestion.name;
    }

    function renderSuggestion(suggestion) {
        return (
            <div className= "react-autosuggest__result">
                <SuggestionItem thumbanilSrc={suggestion.img} name={suggestion.name} price={suggestion.price}></SuggestionItem>
            </div>
            // <span>{suggestion.name}</span>
        );
    }

    function renderSectionTitle(section) {
        return (
            <h3>{section.title.toUpperCase()}</h3>
        );
    }

    function getSectionSuggestions(section) {
        return section.products;
    }

    const onChange = (event, { newValue, method }) => {
        setValue(newValue)
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestion(getSuggestions(value))
        
    };

    const onSuggestionsClearRequested = () => {
        setSuggestion([])
    };
    const inputProps = {
        placeholder: "Tim kiem san pham",
        value,
        onChange: onChange,
    };
    return (
        <React.Fragment>
            <Autosuggest
                id="find_product"
                multiSection={true}
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderSectionTitle={renderSectionTitle}
                getSectionSuggestions={getSectionSuggestions}
                inputProps={inputProps} />
            <button className='react-autosuggest__button' onClick = {handleSubmit}><SearchIcon></SearchIcon></ button>
        </React.Fragment>
    );
    // }
}
export default AutoSuggest;
