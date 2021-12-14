import services from "../APIService";
import { formatRespone } from "../../utils/format";
const userServices = {
    async getUser(userId){
        let rs = await services.get('users',userId);
        // console.log(rs)
        return rs
    },
    async login(loginData){
        let res = await services.post('login',null,loginData);
        // console.log(res)
        
        return formatRespone(res)
    },
    async signup(registerData){
        let res = await services.post('register',null,registerData);
        // console.log(res)
        return formatRespone(res)
    },
    async loginWithFb(){
        let url = 'https://minishop-node-server.herokuapp.com/user/auth/facebook';
        let res = await services.get(url)
        console.log(res)
        return res;
    }
}
export default userServices;