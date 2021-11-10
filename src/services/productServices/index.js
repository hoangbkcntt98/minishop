import services from "../APIService";
import { formatRespone } from "../../utils/format";
import { useSelector } from "react-redux";

const productServices = {
  
    async getProducts(params){

        let rs = await services.get('products',params);
        // console.log(rs)
        return rs.data.data
    },
    async getProduct(params){
        let rs = await services.get('products/'+params);
        // console.log(rs)
        return rs.data.data
    }
  
}   
export default productServices;