import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './header.css'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {

    const [{basket, user}] = useStateValue();
    const handelAuth = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" placeholder="search for products"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={()=>!user && "/login"} className="header__link">
                    <div onClick={handelAuth} className="header__option">
                        <span>hello {user?.email || 'Guest'}</span>
                        <span>{user ? 'signOut' : 'signIn'}</span>
                    </div>
                </Link>
                <Link to="orders" className="header__link">
                    <div className="header__option">
                        <span>returns</span>
                        <span>& orders</span>
                    </div>
                </Link>
                <Link to="login" className="header__link">
                    <div className="header__option">
                        <span>your</span>
                        <span>prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasketBall">
                        <span><ShoppingBasketIcon /></span>
                        <span>{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
