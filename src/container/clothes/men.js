import React, { Component } from 'react';
import Product from './inner';
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

const cart= ()=>{

};
class Men extends Component {
    state={
        shopping :[{id:'1',url:img1,Pname:'Apple ipad',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        {id:'2',url:img2,Pname:'Sony Headphone',cutprice:'$500.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        {id:'3',url:img3,Pname:'Macbook Air',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        {id:'4',url:img4,Pname:'Nikon DSLR',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        {id:'5',url:img5,Pname:'Sony Play Station',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        {id:'6',url:img6,Pname:'Macbook Pro',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        {id:'7',url:img7,Pname:'Bose Speaker',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        {id:'8',url:img8,Pname:'Samsung Galaxy S8',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        {id:'9',url:img9,Pname:'Apple iPhone',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        {id:'10',url:img10,Pname:'Canon DSLR',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        {id:'11',url:img11,Pname:'Google Pixel',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        {id:'12',url:img12,Pname:'Apple Watch',cutprice:'$400.00',price:'$369.00',button:'Add to cart',star:'fa fa-star',halfStar:'fa fa-star-half-o'},
        ]
    };
    render() {
        const product=this.state.shopping.map((prod)=>{
            return(
              <Product name={prod.name} url={prod.url} cut={prod.cutprice} cart={prod.button}  /> 
            )
        })
        return (
            <div>
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
				<div className="item carousel-item active">
					<div className="row">
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={this.state.shopping[0].url} className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Apple iPad</h4>
									<p className="item-price"><strike>$400.00</strike> <span>$369.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className={this.state.shopping[0].star}></i></li>
											<li className="list-inline-item"><i className={this.state.shopping[0].star}></i></li>
											<li className="list-inline-item"><i className={this.state.shopping[0].star}></i></li>
											<li className="list-inline-item"><i className={this.state.shopping[0].star}></i></li>
											<li className="list-inline-item"><i className={this.state.shopping[0].halfStar}></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary" onClick={this.cart}>Add to Cart</a>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={img2} className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Sony Headphone</h4>
									<p className="item-price"><strike>$25.00</strike> <span>$23.99</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>		
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={img3} className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Macbook Air</h4>
									<p className="item-price"><strike>$899.00</strike> <span>$649.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>								
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={img4} className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Nikon DSLR</h4>
									<p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
					</div>
				</div>
				<div className="item carousel-item">
					<div className="row">
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={img5} className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Sony Play Station</h4>
									<p className="item-price"><strike>$289.00</strike> <span>$269.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={img6} className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Macbook Pro</h4>
									<p className="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={img7}  className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Bose Speaker</h4>
									<p className="item-price"><strike>$109.00</strike> <span>$99.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={img8}  className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Samsung Galaxy S8</h4>
									<p className="item-price"><strike>$599.00</strike> <span>$569.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>						
					</div>
				</div>
				<div className="item carousel-item">
					<div className="row">
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={img9}  className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Apple iPhone</h4>
									<p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={img10}  className="img-responsive img-fluid" alt=""/>
								</div>
								<div className="thumb-content">
									<h4>Canon DSLR</h4>
									<p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={img11}  className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Google Pixel</h4>
									<p className="item-price"><strike>$450.00</strike> <span>$418.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>	
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={img12}  className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Apple Watch</h4>
									<p className="item-price"><strike>$350.00</strike> <span>$330.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
				<i className="fa fa-angle-left"></i>
			</a>
			<a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
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