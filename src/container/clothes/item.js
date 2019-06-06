import React, { Component } from 'react';

const Item = (props) => {console.log(props.inCart)
        return (        
                <div className="col-sm-3">
                <h2>{props.id}</h2>
                    <div className="thumb-wrapper">
                        <div className="img-box">
                        
                            <img src={props.url} className="img-responsive img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                            <h4>{props.name}</h4>
                            <p className="item-price"><strike>{props.cut}</strike> <span>{props.price}</span></p>
                            <div className="star-rating">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><i className='fa fa-star'></i></li>
                                    <li className="list-inline-item"><i className='fa fa-star-half-o'></i></li>
                                    <li className="list-inline-item"><i className='fa fa-star-half-o'></i></li>
                                    <li className="list-inline-item"><i className='fa fa-star-half-o'></i></li>
                                    <li className="list-inline-item"><i className='fa fa-star-half-o'></i></li>
                                </ul>
                            </div>
                            {!props.inCart?
                            <a href="#" className="btn btn-primary" onClick={props.addToCart} cart={props.cart}>Add To Cart</a>
                                :
                                
                                <div class="input-group">
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                        <span class="glyphicon glyphicon-minus"></span>
                                    </button>
                                </span>
                                <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10" />
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                        <span class="glyphicon glyphicon-plus"></span>
                                    </button>
                                </span>
                                </div>
                                
                                }
                            </div>						
                    </div>
                </div>
               
        );
            };
export default Item;


    