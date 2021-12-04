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
const Home = () => {
    const productRedux = useSelector((state) => state.product.products)
    useEffect(() => {
       console.log(productRedux)
    }, [productRedux])
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
