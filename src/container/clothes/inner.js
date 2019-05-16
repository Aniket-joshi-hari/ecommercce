
import React, { Component } from 'react';

import Item from './item';
import img1 from '../../resources/ipad.jpg';
import img2 from '../../resources/headphone.jpg';
import img3 from '../../resources/macbook-air.jpg';
import img4 from '../../resources/nikon.jpg';
import img5 from '../../resources/playstation.jpg';
import img6 from '../../resources/macbook-pro.jpg';
import img7 from '../../resources/speaker.jpg';
import img8 from '../../resources/galaxy.jpg';
import img9 from '../../resources/iphone.jpg';
import img10 from '../../resources/canon.jpg';
import img11 from '../../resources/pixel.jpg';
import img12 from '../../resources/watch.jpg';


class  Inner extends Component{
	
	state = {
		shopping :[{id:'1',url:img1,Pname:'Apple ipad',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item active'},
        {id:'2',url:img2,Pname:'Sony Headphone',cutprice:'$500.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item '},
        {id:'3',url:img3,Pname:'Macbook Air',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item '},
        {id:'4',url:img4,Pname:'Nikon DSLR',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item '},
        {id:'5',url:img5,Pname:'Sony Play Station',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item '},
        {id:'6',url:img6,Pname:'Macbook Pro',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item '},
        {id:'7',url:img7,Pname:'Bose Speaker',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item '},
        {id:'8',url:img8,Pname:'Samsung Galaxy S8',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item '},
        {id:'9',url:img9,Pname:'Apple iPhone',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item '},
        {id:'10',url:img10,Pname:'Canon DSLR',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item '},
        {id:'11',url:img11,Pname:'Google Pixel',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item '},
        {id:'12',url:img12,Pname:'Apple Watch',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item '},
		],
		value:0,
	}
	 render(){
		 
		 const item = this.state.shopping.slice(this.state.value,this.state.value + 4).map((element,index)=>{
			return (
				<Item name={element.Pname} price={element.price} cut={element.cutprice} url={element.url} cart={element.button}/>
			)
			
		 });
    return (
    
		   <div className={this.props.item}>
            <div className={this.props.row}>
		  {item}
	       </div>
		   </div>
	);
	}
};

export default Inner;