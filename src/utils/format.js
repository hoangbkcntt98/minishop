export const formatRespone = (res) =>{
    let temp = {
        message:undefined,
        status:undefined,
        data:undefined
    }
    temp.message = res.data.message;
    temp.status = res.data.status;
    temp.data = res.data.data;

    return temp
}