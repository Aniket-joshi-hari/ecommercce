import React from 'react';

const inner = (props) => {
    return (
        <div>
            <div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={props.url} className="img-responsive img-fluid" alt="" />
								</div>
								<div className="thumb-content">
									<h4>{props.name}</h4>
									<p className="item-price"><strike>{props.cut}</strike> <span>{props.price}</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className={this.state.shopping[0].star}></i></li>
											<li className="list-inline-item"><i className={this.state.shopping[0].star}></i></li>
											<li className="list-inline-item"><i className={this.state.shopping[0].star}></i></li>
											<li className="list-inline-item"><i className={this.state.shopping[0].star}></i></li>
											<li className="list-inline-item"><i className={this.state.shopping[0].halfStar}></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">{props.cart}</a>
								</div>						
							</div>
						</div>
            
        </div>
    );
};

export default inner;