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
import { addLinks, clearFilterRedux, filterSelectRedux, getProducts, setLinks, setLoading, setTotalPage } from '../redux/product/ProductSlice'
import SearchName from '../components/search/SearchName'
import Breadcrumb from '../components/bread-cumb/BreadCumb'
import productServices from '../services/productServices'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { RingLoader } from 'react-spinners'
import ProductList from '../components/list/ProductList'
import MyPagination from '../components/list/MyPagination'
const Catalog = () => {
    const filterState = useSelector((state) => state.product.filter)
    const productRedux = useSelector((state) => state.product.products)
    const links = useSelector(state => state.product.links)
    const isLoading = useSelector(state => state.product.isLoading)
    const dispatch = useDispatch()
    const productList = productData.getAllProducts()

    const [products, setProducts] = useState(productList)
    React.useEffect(() => {
        dispatch(setLoading(true));
        productServices.getProducts({ page: 1, page_size: 10 }).then((res) => {

            dispatch(getProducts(res.data.data.products))
            dispatch(setTotalPage(res.data.data.total_pages))
            dispatch(setLoading(false))
        })
        // dispatch(setLoading(false))
        dispatch(setLinks([{
            display: "Product",
            link: "/catalog"
        }]))
    }, [])
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
    useEffect(() => {

    }, [])
    return (
        <Helmet title="Sản phẩm">
            <Breadcrumb />
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
                    {isLoading == true &&
                        <div className="catalog__content__loading">
                            <RingLoader loading={true} size={50} />
                            <h3>Đang tải dữ liệu sản phẩm ....</h3>
                        </div>
                    }

                    {productRedux.length > 0 && isLoading == false &&

                        <ProductList data={productRedux} />
                    }
                    <MyPagination />
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
