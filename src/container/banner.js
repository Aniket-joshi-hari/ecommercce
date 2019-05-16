import React, { Component } from 'react';
import Slider from "react-slick";
import img1 from "../resources/head1.jpg";
import img2 from "../resources/head2.jpg";
import img3 from "../resources/head3.jpg";
import img4 from "../resources/head4.jpg";
class Banner extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay:true,
            slidesToShow: 1,
            slidesToScroll: 1,       
            rows:1,
          };
        return (
            <div style={{marginTop:'150px',width:"95%",marginRight:'2.5%',marginLeft:'2.5%'}}>
                <Slider {...settings}>
          <div>
           <img src={img1} height="450" width="100%" /> 
          </div>
          <div>
          <img src={img2} height="450"  width="100%" /> 
          </div>
          <div>
           <img src={img3} height="450" width="100%" /> 
          </div>
          <div>
          <img src={img4} height="450"  width="100%" /> 
          </div>
          
        </Slider>
            </div>
        );
    }
}

export default Banner;