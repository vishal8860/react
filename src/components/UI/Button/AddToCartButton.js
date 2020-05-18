import React,{Component} from 'react'
import '../Button/AddtoCartButton.scss'
import {Button} from 'react-bootstrap'

class AddToCartButton extends Component{
    render(){
        return(
            <Button className="AddToCartButton" onClick={()=>this.props.addItemToCart(this.props.name)}>Add to cart</Button>
        )
    }
}

export default AddToCartButton