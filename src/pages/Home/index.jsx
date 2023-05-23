import Banner from "../../components/Home/Banner/Banner";
import Gallery from "../../components/Home/Gallery/Gallery";
import UploadProduct from "../../components/Home/UploadProduct/UploadProduct";


const Home = () =>{
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <UploadProduct></UploadProduct>
        </div> 
    )
}

export default Home;