import services from "../APIService";
const userServices = {
    async getUser(userId){
        let rs = await services.get('users',userId);
        console.log(rs)
        return rs
    },
    async login(loginData){
        let res = await services.post('login',null,loginData);
        console.log(res)
        return res
    },
    async signup(registerData){
        let res = await services.post('register',null,registerData);
        console.log(res)
        return res
    }
}
export default userServices;