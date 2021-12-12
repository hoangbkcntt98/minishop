import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'

import { useDispatch } from 'react-redux'

import { addItem } from '../../redux/shopping-cart/cartItemsSlide'
import { remove } from '../../redux/product-modal/productModalSlice'

import Button from '../button/Button'
import numberWithCommas from '../../utils/numberWithCommas'
import { success, warn } from '../noti/noti'
import ImageSlider from '../slider/ImageSlider'
const noImages = require('../../assets/images/no-images.png').default
const ProductView = props => {

    const dispatch = useDispatch()

    let product = props.product
    const content = "Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!<br><br><br>Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của chúng. Càng đơn giản, bạn lại càng dễ mix & match với những món đồ khác nhau.Áo thun nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó, áo thun nữ cotton cổ tròn Yody có khả năng thâm shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động <br><br><br> Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!<br><br><br>Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của chúng. Càng đơn giản, bạn lại càng dễ mix & match với những món đồ khác nhau.Áo thun nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó, áo thun nữ cotton cổ tròn Yody có khả năng thâm shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động" 
    if (product === undefined) product = {
        title: "",
        price: '',
        image01: null,
        image02: null,
        categorySlug: "",
        colors: [],
        slug: "",
        size: [],
        description: ""
    }

    const [previewImg, setPreviewImg] = useState(product.variations[0].images[0])

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)
    const [rage ,setRage] = useState({
        min:0,
        max:0,
        avg:0
    }); 
    useEffect(()=>{
        if(product){
            let variationsPrice = product.variations.map(item => item.retail_price);
            let min=Math.min(...variationsPrice),
                max=Math.max(...variationsPrice)
            //set colors for product
            // product.colors = product.product_attributes[0].map(item => item.values )
            // product.size = product.product_attributes[1].map(item => item.values )
            if(max!=min){
                setRage({
                    min:min,
                    max:max
                })
            }else{
                setRage({
                    ...rage,
                    avg:min
                })
            }
            

        }
    },[product])

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.variations[0]?.images[0] ? product.variations[0].images[0] : noImages)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    const check = () => {
        if (color === undefined) {
            warn('Vui lòng chọn màu sắc!')
            return false
        }

        if (size === undefined) {
            warn('Vui lòng chọn kích cỡ!')
            return false
        }

        return true
    }

    const addToCart = () => {
        if (check()) {
            
            let variation = product.variations.find(item => {
                return item.color == color&&item.size == size
            })
            if(!variation){
                warn("Mat hang nay da het")
            }else{
                console.log('varitaion',variation)
                let newItem = {
                    slug: product.custom_id,
                    color: color,
                    size: size,
                    price: variation.retail_price,
                    quantity: quantity,
                    image : variation.images[0],
                    name: product.name
                }
                if (dispatch(addItem(newItem))) {
                    success('Them vao gio hang thanh cong!')
                } else {
                    warn('The mat hang that bai')
                }
            }
          
            
        }
    }

    const goToCart = () => {
        if (check()) {
            let variation = product.variations.find(item => {
                return item.color == color && item.size == size;
            })
            console.log(variation)
            if(!variation){
                warn("Mat hang nay da het")
            }else{
                let newItem = {
                    slug: product.custom_id,
                    color: color,
                    size: size,
                    price: variation.retail_price,
                    quantity: quantity,
                    image : variation.images[0],
                    name: product.name
                }
                if (dispatch(addItem(newItem))) {
                    dispatch(remove())
                    props.history.push('/cart')
                } else {
                    alert('Fail')
                }
            }
            
        }
    }

    return (
        <div className="product">
            <div className="product__image__info">
                <div className="product__images">
                    <div className="product__images__main">
                        <img src={previewImg} alt="" />
                    </div>
                    <ImageSlider setImage = {setPreviewImg} images={product.variations.map(item => {
                        return {
                            url: item.images[0],
                            code: item.custom_id
                        }
                    })
                    } />
                </div>
                <div className="product__info">
                    <h1 className="product__info__title">{product.name}</h1>
                    <h2>Mã sản phẩm : {product.custom_id}</h2>
                    <hr />
                    <div className="product__info__item">
                        <span className="product__info__item__price">
                            {rage.avg==0?numberWithCommas(rage.min)+'-'+numberWithCommas(rage.max):numberWithCommas(rage.avg)}
                            {/* {numberWithCommas(product.variations[0].retail_price)+' - '+numberWithCommas(product.variations[0].retail_price)} */}
                        </span>
                    </div>
                    <div className="product__info__item">
                        <div className="product__info__item__title">
                            Màu sắc
                        </div>
                        <div className="product__info__item__list">
                            {
                                product.colors&&product.colors.map((item, index) => (
                                    <div key={index} className={`product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                        {/* <div className={`circle bg-main`}></div> */}
                                        <div className="circle bg-main">{item}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product__info__item">
                        <div className="product__info__item__title">
                            Kích cỡ
                        </div>
                        <div className="product__info__item__list">
                            {
                                product.sizes&&product.sizes.map((item, index) => (
                                    <div key={index} className={`product__info__item__list__item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                        <span className="product__info__item__list__item__size">
                                            {item}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product__info__item">
                        <div className="product__info__item__title">
                            Số lượng
                        </div>
                        <div className="product__info__item__quantity">
                            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                                <i className="bx bx-minus"></i>
                            </div>
                            <div className="product__info__item__quantity__input">
                                {quantity}
                            </div>
                            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                                <i className="bx bx-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="product__info__item">
                        <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
                        <Button onClick={() => goToCart()}>mua ngay</Button>
                    </div>
                </div>
            </div>

            <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{ __html: content}}></div>
                <div className="product-description__toggle">
                    <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
            </div>
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{ __html: content}}></div>
                <div className="product-description__toggle">
                    <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(ProductView)
