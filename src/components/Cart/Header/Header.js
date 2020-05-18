import React,{Component} from 'react'
import CartIcon from '../CartIcon/CartIcon'
import Search from '../Search/Search'
import './Header.scss'
import Logo from '../../../assests/logo.png'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <Link to="/">
                <img src={Logo} className="LogoImg" alt="Logo"/>
                </Link>
                <CartIcon selectedItems={this.props.selectedItems}></CartIcon>
                <Search></Search>
            </div>
        )
    }
}

export default Header