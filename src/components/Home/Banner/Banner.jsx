import image_1 from '../../../assets/banner_image_1.webp'
import image_2 from '../../../assets/banner_image_2.webp'
import image_3 from '../../../assets/banner_image_3.webp'

function Banner() {
    return (
    <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[500px]">
            <img src={image_1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-14 right-14 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-[500px]">
            <img src={image_2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-14 right-14 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-[500px]">
            <img src={image_3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-14 right-14 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
    </div>
    );
}

export default Banner;