import React, { Component } from 'react';
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
import img13 from '../../resources/pixel.jpg';
class Men extends Component {
    render() {
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
									<img src={img1} className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>Apple iPad</h4>
									<p className="item-price"><strike>$400.00</strike> <span>$369.00</span></p>
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