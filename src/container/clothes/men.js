import React, { Component } from 'react';
import Product from './inner';

  
class Men extends Component {
    state={
       
		container:[{id:'1',class:'item carousel-item active',row:'row'},{id:'2',class:'item carousel-item ',row:'row'},
		{id:'3',class:'item carousel-item ',row:'row'}]
		  };
		  
		 
		  change = ()=> {
			console.log("render");
			let y=this.state.value
			y = y+4;
			
			this.setState({
				value:y
				})
		}
    render() {
        const product=this.state.container.map((prod)=>{
			return(
			<Product  item={prod.class} row={prod.row} />
			)
		});
	
	
        return (
            
                <div className="container" style={{marginTop:'30px'}}>
	<div className="row">
		<div className="col-md-12">
			<h2>Trending <b>Products</b></h2>
			<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
			{/* <!-- Carousel indicators --> */}
			<ol className="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			</ol>   
			{/* <!-- Wrapper for carousel items --> */}
			<div className="carousel-inner">
				
			
				{product}
		
			<a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
				<i className="fa fa-angle-left"></i>
			</a>
			<a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next" onClick={ this.change}>
				<i className="fa fa-angle-right"></i>
			</a>
		</div>
		</div>
	</div>
</div>
            </div>
        );
    }
}

export default Men;	