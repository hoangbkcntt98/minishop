import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/helmet/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/section/Section'
import PolicyCard from '../components/card/PolicyCard'
import Grid from '../components/grid/Grid'
import ProductCard from '../components/card/ProductCard'

import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'
import HeroSlider from '../components/slider/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import banner from '../assets/images/banner.png'
import ad1 from '../assets/images/banner1.jpg'
import Slider from '../components/slider/Slider'
import {useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import productServices from '../services/productServices'
import { setCategories,setProducts, product, setLinks, setLoading, setTotalPage, setProduct, setColorsRedux, setSizesRedux } from '../redux/product/ProductSlice'
const Home = () => {
    const dispatch = useDispatch()
    const productRedux = useSelector((state) => state.product.products)
    useEffect(()=>{
        const formatIndex = (index) =>{
            if(index.length==0) return index
            let other = index.find(item => item.display.toUpperCase().includes("KHÁC"))
            if(other ){
                console.log('other',other)
                index = index.filter(item => !item.display .toUpperCase().includes("KHÁC"))
                index.push(other)
                console.log('child formated',index)
            }
          
            return index
        }
        productServices.getProductAttributes({ type: "CATE" }).then(res => {
            let initIndex = [
                {
                    root: "Áo",
                    categorySlug: "a",
                    type: 1,
                    open: false,
                    child: []
                },
                {
                    root: "Quần",
                    categorySlug: "q",
                    open: false,
                    child: [],
                    type: 2
                },
                {
                    root: "Váy",
                    categorySlug: "a",
                    open: false,
                    child: [],
                    type: 3
                },
                
                {
                    root: "Set",
                    categorySlug: "S",
                    // type: 4,
                    open: false,
                    child: []
                },
                {
                    root: "Khác",
                    categorySlug: "OTHER",
                    open: false,
                    child: [],
                    
                },
            ]
            initIndex = initIndex.map(item => {
                let child = res.filter(c => c.sub_type == item.type).map(val => {
                    return {
                        display: val.display,
                        categorySlug: val.code
                    }
                })
                item.child = formatIndex(child)
                console.log('child',child)
                return item
            })
            // setIndexs(initIndex)
            dispatch(setCategories(initIndex))
        })
        productServices.getProductAttributes({type:"COLOR"}).then(res =>{
            // console.log(res)
            let temp = res.map(r => {
                return {
                    display:r.display,
                    color:r.code
                }
            })
            dispatch(setColorsRedux(temp))
        })
        productServices.getProductAttributes({type:"SIZE"}).then(res => {
            let temp = res.map(r => {
                return {
                    display:r.display,
                    size:r.code
                }
            })
            dispatch(setSizesRedux(temp))
        })
        productServices.getProducts().then((res) => {

            dispatch(setProducts(res.products))
            dispatch(setTotalPage(parseInt(res.total_pages/12)+1))
            // dispatch(setLoading(false))
        })
    },[])
    return (
        <Helmet title="Trang chủ">
            <Section>
                <div className="banner">
                    <Slider />
                    {/* <HeroSlider
                        data={heroSliderData}
                        control={true}
                        auto={false}
                        timeOut={5000}
                    /> */}
                    <div className="banner__ads">
                        <div className="banner__ads__image"><img src={ad1} alt=""></img></div>
                        <div className="banner__ads__image"><img src={ad1} alt=""></img></div>
                    </div>
                </div>

            </Section>
            {/* end hero slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end policy section */}

            {/* best selling section */}
            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end new arrival section */}

            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* end banner */}

            {/* popular product section */}
            <Section>
                <SectionTitle>
                    phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end popular product section */}
        </Helmet>
    )
}

export default Home
