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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(0,0,0,0.5)",width:"7%",height:"20%",paddingTop:'16px',paddingLeft:'10px',zIndex:'1',fontFamily: 'slick' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(0,0,0,0.5)",width:"7%",height:"20%",paddingRight:'10px',paddingTop:'16px',zIndex:'1'}}
        onClick={onClick}
      />
    );
  }
class Electronic extends Component {
    render() {
        const settings = {
 
            infinite: true,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
            
          };
        return (
            <div className="elctronicWrapper">
            <p className="eHead">New Books Collection</p>
            <div className="firstSection" style={{marginTop:'5px',width:'95%',marginLeft:'2.5%',marginRight:'2.5%'}}>
                <Slider {...settings}>
          <div >
              <div className="itemContainer">
           <img src={img1} height="200" width="100%" />
           </div>
          </div>
          <div>
          <div className="itemContainer">   
          <img src={img2} height="200" width="100%"  />
          </div>
          </div>
          <div>
          <div className="itemContainer">
          <img src={img3} height="200" width="100%"  />
          </div>
          </div>
          <div>
          <div className="itemContainer">
          <img src={img4} height="200" width="100%"  />
          </div>
          </div>
         
          <div>
          <div className="itemContainer">
          <img src={img5} height="200" width="100%" />
          </div>
          </div>
          <div>
          <div className="itemContainer">
          <img src={img6} height="200" width="100%" />
          </div>
          </div>
          <div>
          <div className="itemContainer">
          <img src={img7} height="200" width="100%"  />
          </div>
          </div>
          <div>
          <div className="itemContainer">
          <img src={img8} height="200" width="100%"  />
          </div>
          </div>
        </Slider> 
            </div>
            </div>
        );
    }
}

export default Electronic;