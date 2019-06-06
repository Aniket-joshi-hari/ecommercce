import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dress1 from '../../resources/dress.jpg';
import Shoes from '../../resources/Shoes.jpg';
import Cont from '../../resources/cont.jpg';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


class index extends Component {
    render() {
        const handleOnDragStart = e => e.preventDefault()
        return (
            <div className="women" style={{width:'90%',margin:'auto'}}>
                
                <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={dress1}
                alt="First slide"
                height="280" width="50" 
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Shoes}
                alt="Third slide"
                height="280" width="50" 
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Cont}
                alt="Third slide"
                height="280" width="200" 
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>;

            <AliceCarousel mouseDragEnabled >
      <img src={dress1} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src= {dress1} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={dress1} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={dress1} onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src={dress1} onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel>
            </div>
        );
    }
}

export default index;