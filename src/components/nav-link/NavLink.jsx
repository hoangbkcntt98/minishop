import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react'
import NavLinkItem from './NavLinkItem';
import initIndex from '../../assets/fake-data/index'
const NavLink = (props) => {
    const { filterFunc } = props

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
        if(type =="index"){
            filterFunc("INDEX", true, item.child.map(d => d.categorySlug))
        }
        if(type =="category"){
            // filterFunc("CATEGORY",true,item)
            filterFunc("INDEX", true, [item.categorySlug])
        }
           

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
