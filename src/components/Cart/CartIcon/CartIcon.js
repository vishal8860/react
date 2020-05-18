import React,{Component} from 'react'
import "../CartIcon/CartIcon.scss"
import {Link} from 'react-router-dom'

class CartIcon extends Component{
    render(){
        return(
            <div className="PullRight">
            <Link 
              to={{
                pathname: "/checkout",
                data: this.props.selectedItems 
              }} className="WhiteColor">
            <i className="fa fa-cart-plus"></i>
            </Link>
            </div>
        )
    }
}

export default CartIcon