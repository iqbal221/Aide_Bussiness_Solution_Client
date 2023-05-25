import axios from 'axios'

export default function GetUserbyId(id){
    let URL = `https://aide-bussiness-solution-server.vercel.app/api/v1/GetUserById/${id}`
    return axios.get(URL)
    .then((res)=>{
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