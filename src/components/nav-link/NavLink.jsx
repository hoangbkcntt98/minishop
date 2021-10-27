import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react'
import NavLinkItem from './NavLinkItem';
import { useSelector, useDispatch } from 'react-redux'
import initIndex from '../../assets/fake-data/index'
import { filterSelectRedux } from '../../redux/product/ProductSlice';
const NavLink = (props) => {
    const dispatch = useDispatch()
    const [index, setIndexs] = useState(initIndex)
    const show = (item) => {
        let temp = clone(index);
        for (let val of temp) {
            if (val.root === item) {
                val.open = !val.open
                // filterFunc("INDEX", true, val.child.map(d=>d.categorySlug))
            }
        }
        setIndexs(temp)
    }
    const update = (type, item) => {
        // filterFunc("INDEX",true,[])
        const filterData = {
            type:type,
            checked:true,
            item:item.child?item.child.map(data => data.categorySlug):item.categorySlug,
        }
        dispatch(filterSelectRedux(filterData))
        // if(type =="index"){
        //     dispatch(filterSelectRedux("INDEX", true, item.child.map(d => d.categorySlug)))
        // }
        // if(type =="category"){
        //     // filterSelectRedux("CATEGORY",true,item)
        //     filterSelectRedux("INDEX", true, [item.categorySlug])
        // }
           

    }
    const clone = (item) => {
        return JSON.parse(JSON.stringify(item));
    }
    return (
        <React.Fragment>
            <div className="nav-link__category">
                {index.map((item, index) => {
                    return (<NavLinkItem open={item.open} showDropdown={show} title={item} update={update}></NavLinkItem>)
                })}
            </div>
        </React.Fragment>

    )
}

export default NavLink
