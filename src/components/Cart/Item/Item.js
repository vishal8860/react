import React,{Component} from 'react'
import {Col} from 'react-bootstrap'
import './Item.css'
import AddToCartButton from '../../UI/Button/AddToCartButton'

class Item extends Component{
    render(){
        return(
            <div className="ItemList">
                <Col md={3}>
                    <img alt={this.props.name} src={this.props.image} className="Image"></img>
                    <p>{this.props.name}</p>
                    <p><strong>{this.props.displayPrice} <span className="ActualPrice">{this.props.actualPrice}</span> <span className="Discount"> {this.props.discount} %off </span></strong> </p>
                    <p className="AddBtnWrapper">
                    <AddToCartButton addItemToCart={(item)=>this.props.addItem(item)} name={this.props}></AddToCartButton></p>
                </Col>
            </div>
        )
    }
}

export default Item