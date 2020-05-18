import React,{Component} from 'react'
import {Col,Row} from 'react-bootstrap'
import './ItemCard.scss'
import QuantityButton from '../../../../UI/Button/QuantityButton'

class ItemCard extends Component{
    render(){
        return(
            <div>
                <Row className="Item">
                    <Col md={3}>
                        <span className="ImageContainer">
                            <img src={this.props.image} alt={this.props.name}></img>
                        </span>
                    </Col>
                    <Col md={3} className="ItemDiv">
                        <span>
                            {this.props.name}<br/>
                            <strong>{this.props.displayPrice} <span className="ActualPrice">{this.props.actualPrice}</span> <span className="Discount"> {this.props.discount} %off </span></strong>
                        </span>
                    </Col>
                    <Col md={2} className="ItemDiv">
                        <QuantityButton displayPrice={this.props.displayPrice} name={this.props.item} actualPrice={this.props.actualPrice} quantityHandler={(identifier,displayPrice,actualPrice,name)=>this.props.quantityChangeHandler(identifier,displayPrice,actualPrice,name)} quantity={this.props.quantity}></QuantityButton>
                    </Col>
                    <Col md={3} className="ItemDiv">
                        Remove
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ItemCard