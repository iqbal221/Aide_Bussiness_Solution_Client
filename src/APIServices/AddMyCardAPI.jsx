import axios from 'axios'

export default function AddMyCardProduct(name,price,img){
    let URL = "https://aide-bussiness-solution-server.vercel.app/api/v1/AddCardProduct";
    const ProductInfo={
        Name:name,
        Price:price,
        Image:img
    }
    return axios.post(URL,ProductInfo)
    .then((res)=>{
        console.log(res)
        if(res.status===200){
            return true;
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}