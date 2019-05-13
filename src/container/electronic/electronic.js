import React, { Component } from 'react';
import Slider from "react-slick";
import img1 from "../../resources/1.jpg";
import img2 from "../../resources/6.jpg";
import img3 from "../../resources/7.jpg";
import img4 from "../../resources/8.jpg";
import img5 from "../../resources/9.jpg";
import img6 from "../../resources/10.jpg";
import img7 from "../../resources/11.jpg";
import img8 from "../../resources/12.jpg";
class Electronic extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay:true,
            slidesToShow: 5,
            slidesToScroll: 1,
          };
        return (
            <div  style={{marginTop:'100px',width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                <Slider {...settings}>
          <div>
           <img src={img1} height="200" width="120" />
          </div>
          <div>
          <img src={img2} height="200" width="120" />
          </div>
          <div>
          <img src={img3} height="200" width="120" />
          </div>
          <div>
          <img src={img4} height="200" width="120" />
          </div>
         
          <div>
          <img src={img5} height="200" width="120" />
          </div>
          <div>
          <img src={img6} height="200" width="150" />
          </div>
          <div>
          <img src={img7} height="200" width="150" />
          </div>
          <div>
          <img src={img8} height="200" width="150" />
          </div>
        </Slider> 
            </div>
        );
    }
}

export default Electronic;