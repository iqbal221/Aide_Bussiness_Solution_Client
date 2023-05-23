import axios from 'axios'

export default function GetUser(){
    let URL = 'https://aide-bussiness-solution-server.vercel.app/api/v1/GetUser'
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