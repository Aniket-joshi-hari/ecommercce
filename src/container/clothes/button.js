import React from 'react';

const Button = (props) => {
    return (
        <div>
            	<a className="carousel-control left carousel-control-prev" onClick={(e)=> props.changed(e)} href="#myCarousel" data-slide="prev">
				<i className="fa fa-angle-left"></i>
			</a>
			<a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next" >
				<i className="fa fa-angle-right" onClick={(e)=> props.change(e)}></i>
			</a>	
        </div>
    );
};

export default Button;