import axios from 'axios'

export default function AddUser(name, email, role,plan,status,imageLink ){
    let URL = 'https://aide-bussiness-solution-server.vercel.app/api/v1/AddUser';
    let PostBody = {
        Name:name,
        Email:email,
        Role:role,
        Plan:plan,
        Status:status,
        Image:imageLink
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