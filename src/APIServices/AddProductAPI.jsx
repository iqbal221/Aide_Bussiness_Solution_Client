import axios from 'axios'

export default function AddProduct(Name, Price, ImageLInk){
    let URL = 'https://aide-bussiness-solution-server.vercel.app/api/v1/UploadProduct';
    let PostBody = {
        Name:Name,
        Price:Price,
        Image:ImageLInk
    }
    console.log(PostBody)
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