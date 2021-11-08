import React from 'react'
import Grid from '../grid/Grid'
import ProductCard from '../card/ProductCard';
import Pagination from '@mui/material/Pagination';
import MyProductCard from '../card/MyProductCard';

const ProductList = (props) => {
    const { data } = props;
    
   
    return (
        <React.Fragment>
            <div >
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                        data.map((item, index) => (
                            <MyProductCard
                                key={index}
                                image={item.image}
                                name={item.name}
                                price={Number(item.variations[0].retail_price)}
                                slug={item.custom_id}
                            />
                        ))
                    }


                </Grid>
            </div>
        </React.Fragment>
    )
}

export default ProductList
