
import React, { Component } from 'react';
import Button from './button';
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
// import Button from './button';

class  Inner extends Component{
	
	state = {
		shopping :[{id:'1',url:img1,Pname:'Apple ipad',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item active',inCart:false},
        {id:'2',url:img2,Pname:'Sony Headphone',cutprice:'$500.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item ',inCart:false},
        {id:'3',url:img3,Pname:'Macbook Air',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item ',inCart:false},
        {id:'4',url:img4,Pname:'Nikon DSLR',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item ',inCart:false},
        {id:'5',url:img5,Pname:'Sony Play Station',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item ',inCart:false},
        {id:'6',url:img6,Pname:'Macbook Pro',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item ',inCart:false},
        {id:'7',url:img7,Pname:'Bose Speaker',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item ',inCart:false},
        {id:'8',url:img8,Pname:'Samsung Galaxy S8',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item ',inCart:false},
        {id:'9',url:img9,Pname:'Apple iPhone',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item ',inCart:false},
        {id:'10',url:img10,Pname:'Canon DSLR',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item ',inCart:false},
        {id:'11',url:img11,Pname:'Google Pixel',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item ',inCart:false},
        {id:'12',url:img12,Pname:'Apple Watch',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o',class:'item carousel-item ',inCart:false},
		],
		value:0,
		type:'inc',
		cart:[],

	}
	componentDidMount(e){
        this.change=(e) =>{
			let max=this.state.shopping.length;
			let min = 0;
			
			let i= this.state.value;
			if( i<max-4){
				if(i==max){
					this.setState({
						type: 'inc'
					});
				}
				i=i+4;
			}else{
			
					this.setState({
						type: 'dec'
					});
				
				i=0;
			}

			this.setState({
					value: i
				});	
				

		};

		this.changed=(e)=>{
			let min=this.state.value;
		 let max=this.state.shopping.length ;
		 let i=this.state.value;
		 if(i === 0){
		  i=this.state.value+8;;	
		 }
		 if(i >0){
			i =i-4;
		 }
		 
		 console.log(i)
		 this.setState({
			value: i
		});	
		
		}
			}
			
			addToCart =(e,index,id,name,cutprice,price,url,inCart)=>{
				 const selectedItem=[...this.state.shopping];
				 console.log(selectedItem[index].inCart)
				 selectedItem[index].inCart=true;

				console.log(selectedItem.inCart)
			 const cart =	[...this.state.cart];
				let cartItem={
					id:id,
					name:name,
					cutprice:price,
					price:cutprice,
					imageurl:url,
					inCart:inCart,
				
				};
				
				cart.push(cartItem);

				this.setState({
					shopping:selectedItem,
					cart:cart
				})
			
				
			}
	
	 render(){
		console.log(this.state.shopping);
		 console.log('in render',this.state.value);
			let shopping=[...this.state.shopping];
		 let neArr =  shopping.slice(this.state.value,this.state.value+4)
		console.log(neArr)
		 
		 let item = neArr.map((element,index)=>{
			
			return (
				<Item inCart={element.inCart} name={element.Pname} key={index} price={element.price} cut={element.cutprice} url={element.url} cart={element.button} addToCart={(e)=>this.addToCart(e,index,element.id,element.Pname,element.cutprice,element.price,element.url,element.inCart)}/>
			)
			
		 }
		 
		);
		
    return (
			<div>
		   <div className={this.props.item}>
            <div className={this.props.row}>
		    {item}
	       </div>
		   </div>
		   <Button change={(e)=> this.change(e)}  changed={ (e)=> this.changed(e)} />
		   <p></p>
		   </div>

		
	
	);
	}
};

export default Inner;