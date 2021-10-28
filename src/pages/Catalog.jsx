import React, { useCallback, useState, useEffect, useRef } from 'react'

import Helmet from '../components/helmet/Helmet'
import CheckBox from '../components/checkbox/CheckBox'

import productData from '../assets/fake-data/products'
import colors from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'
import Button from '../components/button/Button'
import InfinityList from '../components/list/InfinityList'
import NavLink from '../components/nav-link/NavLink'
import { useSelector, useDispatch } from 'react-redux'
import { clearFilterRedux, filterSelectRedux } from '../redux/product/ProductSlice'
import SearchName from '../components/search/SearchName'

const Catalog = () => {
    const filterState = useSelector((state) => state.product.filter)
    const dispatch = useDispatch()
    useEffect(() => {
        // console.log(filterState)
    }, [filterState])
    const productList = productData.getAllProducts()

    const [products, setProducts] = useState(productList)


    const filterSelect = (type, checked, item) => {
        const filterData = {
            type: type,
            checked: checked,
            item: item
        }
        dispatch(filterSelectRedux(filterData))
    }


    const updateProducts = useCallback(
        () => {
            let temp = productList
            if (filterState.name.length > 0) {
                temp = temp.filter(e => e.title.includes(filterState.name))
            }
            if (filterState.category.length > 0) {

                temp = temp.filter(e => filterState.category.includes(e.categorySlug))
            }

            if (filterState.color.length > 0) {
                temp = temp.filter(e => {
                    const check = e.colors.find(color => filterState.color.includes(color))
                    return check !== undefined
                })
            }

            if (filterState.size.length > 0) {
                temp = temp.filter(e => {
                    const check = e.size.find(size => filterState.size.includes(size))
                    return check !== undefined
                })
            }
            setProducts(temp)
        },
        [filterState, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const filterRef = useRef(null)
    const [open, setOpen] = useState(false)
    const showHideFilter = () => {
        filterRef.current.classList.toggle('active')
        setOpen(!open)
    }
    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className={open ? "catalog__filter__close show" : "catalog__filter__close"} onClick={showHideFilter}>
                    <i className="bx bx-x"></i>
                </div>
                <div className="catalog__filter" ref={filterRef}>


                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title catalog__filter__widget__title__category">
                            DANH MUC
                        </div>

                        <div className="catalog__filter__widget__content">
                            <NavLink />
                        </div>
                    </div>
                    <div className="catalog__filter__widget__title catalog__filter__widget__title__category">
                        BO LOC
                    </div>
                    {/* <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Loai
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                category.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                            checked={filter.category.includes(item.categorySlug)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div> */}

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            màu sắc
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                colors.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("COLOR", input.checked, item)}
                                            checked={filterState.color.includes(item.color)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            kích cỡ
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                size.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("SIZE", input.checked, item)}
                                            checked={filterState.size.includes(item.size)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm" onClick={() => {
                                    dispatch(clearFilterRedux())
                                }}>xóa bộ lọc</Button>
                        </div>
                    </div>
                </div>
                <div className="catalog__filter__toggle">
                    <Button size="sm" onClick={() => showHideFilter()}>bộ lọc</Button>
                </div>
                <div className="catalog__content">
                    <SearchName
                    />
                    {/* {filterState.name.length > 0 && <div>Kết quả tìm kiếm cho : {filterState.name.toUpperCase()}</div>} */}
                    <InfinityList
                        data={products}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
