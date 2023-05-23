import axios from 'axios'

export default function AddProduct(Name, Price, Image){
    let URL = 'http://localhost:5000/api/v1/AddProduct';
    let PostBody = {
        Name:Name,
        Price:Price,
        Image:Image,
    }
    return axios.post(URL,PostBody)
    
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