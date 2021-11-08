import services from "../APIService";
import { formatRespone } from "../../utils/format";
const productServices = {
    async getProducts(params){

        let rs = await services.get('products',params);
        console.log(rs)
        return rs
    },
   
}
export default productServices;