import React, { Component } from 'react';
import Product from './inner';

  
class Men extends Component {
    state={
       
		container:[{id:'1',class:'item carousel-item active',row:'row'},{id:'2',class:'item carousel-item ',row:'row'},
		{id:'3',class:'item carousel-item ',row:'row'}]
		  };
		  
			change=() =>{
				console.log('success');
			};
		 
    render() {

		// 	return(
		// 		<Product  item={prod.class} row={prod.row} />
		// 		)	
    //   //   const product=this.state.container.map((prod)=>{
		// 	// return(
		// 	// <Product  item={prod.class} row={prod.row} />
		// 	// )	
		// });
	
	
        return (
            
    <div className="container" style={{marginTop:'30px'}}>
	<div className="row">
		<div className="col-md-12">
			<h2>Trending <b>Products</b></h2>
			<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
		
			<ol className="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			</ol>   
			{/* <!-- Wrapper for carousel items --> */}
			<div className="carousel-inner">
				
			
			<Product  item={this.state.container[0].class} row={this.state.container[0].row} />
			
		
		</div>
		</div>
	</div>
</div>
  </div>
        );
    }
}

export default Men;	