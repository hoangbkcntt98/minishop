import React from 'react'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, setLoading, setTotalPage } from '../../redux/product/ProductSlice';
import productServices from '../../services/productServices';
const MyPagination = () => {
    const [page, setPage] = React.useState(1);
    const dispatch = useDispatch();
    const totalPages = useSelector(state => state.product.total_pages)
    const isLoading = useSelector(state => state.product.isLoading)
    React.useEffect(() => {
        // alert(page)
     
        console.log(page)
        if (page) {
            dispatch(setLoading(true))
            productServices.getProducts({ page: page, page_size: 10 }).then(
                res => {
                    dispatch(getProducts(res.data.data.products))
                    dispatch(setLoading(false))
                    dispatch(setTotalPage(res.data.data.total_pages))
                }
            )
        }

    }, [page])
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <React.Fragment>
            <div className="product-list__pagination" >
                <Pagination  
                 sx={{
                    "& .MuiPaginationItem-root.Mui-selected": {
                       
                        backgroundColor: "#ed71a3",
                      
                    },
                    
                }}
                style = {{display:isLoading?'none':'block'}}className="product-list__pagination__item" count={totalPages} page={page} onChange={handleChange} />
            </div>
        </React.Fragment>
    )
}

export default MyPagination
