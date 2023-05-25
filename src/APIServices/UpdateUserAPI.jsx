import axios from 'axios'

export default function UpdateUser(name, email, role,plan,status){
    let URL = 'https://aide-bussiness-solution-server.vercel.app/api/v1/UpdateUser';
    let PostBody = {
        Name:name,
        Email:email,
        Role:role,
        Plan:plan,
        Status:status,
    }
    return axios.update(URL,PostBody)
    
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