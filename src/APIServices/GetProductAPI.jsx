import axios from 'axios'

export default function GetProduct(){
    let URL = 'http://localhost:5000/api/v1/GetProduct'
    return axios.get(URL)
    .then((res)=>{
        console.log(res)
        if(res.status===200){
            return res.data["data"];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}