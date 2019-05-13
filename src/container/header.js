import React from 'react';
import Logo from '../orange.png';
const header = () => {
    return (
        <div>
            <div className="nav-wrapper">
            <div className="logo">
              <ul>
                  <li><img src={Logo} heigth='100' width='130' /></li>
              </ul>
            </div>
            <div className="navItem">
              <ul>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Kids</a></li>
                  <li><a href="#">Home & Living</a></li>
                  <li><a href="#">Discover</a></li>
              </ul>
            </div>
            <div className="rightSide">
            <div className="searchBar">
            <div className="searchContainer">
            <button><i className="fas fa-search"></i></button>
            <input type="text" placeholder="search for product brands and more" ></input>
            
            </div>
            <div className="lastNav">
            <div className="both">
            <i className="fas fa-user" style={{color:'#00acee'}}></i>
            <p style={{fontSize:'12px'}}>Profile</p>
            </div>
            <div className="both">
            <i className="far fa-bookmark" style={{color:'#00acee'}}></i>
            <p style={{fontSize:'12px'}}>Wishlist</p>
            </div>
            <div className="both">
            <i className="fas fa-shopping-bag" style={{color:'#00acee'}}></i>
            <p style={{fontSize:'12px'}}>Bag</p>
            </div>
            </div>
            </div>

            </div>
            </div>
        </div>
    );
};

export default header;