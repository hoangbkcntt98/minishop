import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import ProductView from './ProductView'

import Button from '../button/Button'

import { remove } from '../../redux/product-modal/productModalSlice'

import productData from '../../assets/fake-data/products'

const ProductViewModal = () => {

    const productSlug = useSelector((state) => state.productModal.value)
    const productsRedux = useSelector((state) => state.product.products)
    const dispatch = useDispatch()

    const [product, setProduct] = useState(undefined)

    useEffect(() => {
        if(productsRedux){
            let prod = productsRedux.find((item) => item.custom_id == productSlug)
            setProduct(prod)
        }else{
            console.log('empty select product');
        }

        // setProduct(productData.getProductBySlug(productSlug))
    }, [productSlug]);

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product}/>
                <div className="product-view__modal__content__close">
                    <Button
                        size="sm"    
                        onClick={() => dispatch(remove())}
                    >
                        đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
