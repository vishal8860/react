import React,{Component} from 'react'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import ItemCard from '../Checkout/ItemDetails/ItemCard/ItemCard'
import {Col,Row} from 'react-bootstrap'
import PriceCard from './PriceCard/PriceCard'
import './Checkout.scss'
import * as actionTypes from '../../../store/actions'

class Checkout extends Component{
    state = {
        checkoutItems:this.props.location.data,
        quantityDict:{}
    }

    componentDidMount(){
        const a = this.props.location.data
        this.setState({checkoutItems:a});
    }

    cardQuantityChangeHandler(identifier,displayPrice,actualPrice,item){
        if(identifier==='add'){
            this.props.onQuantityAdded(item);
        }else{
            this.props.onQuantityRemoved(item);
        }
    }

    render(){
        console.log(this.props.selectedProducts)
        const checkoutItems = this.props.selectedProducts.length ? this.props.selectedProducts : JSON.parse(localStorage.getItem('selectedItems'));
        console.log(checkoutItems)
        const listItems = checkoutItems.map(
            item =>{
                return (<ItemCard className="Item"
                key = {item.name}   
                image={item.image}
                discount={item.discount}
                actualPrice={item.actualPrice}
                displayPrice={item.displayPrice}
                item={item} 
                quantityChangeHandler={(identifier,displayPrice,actualPrice,item)=>this.cardQuantityChangeHandler(identifier,displayPrice,actualPrice,item)} 
                quantity={this.props.quantityDict[item.name]}></ItemCard>)
            }
        );

        return(
            <div>
                <Header></Header>
                <Row className="cardBackground">
                    <Col md={8}>
                        {listItems}
                    </Col>
                    <Col md={3}>
                        <PriceCard 
                        price={this.props.totalPrice} 
                        discount={this.props.totalDiscount}
                        payable={this.props.totalPayable}></PriceCard>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedProducts:state.checkoutItem,
        totalPrice:state.totalPrice,
        totalDiscount:state.totalDiscount,
        totalPayable:state.totalPayable,
        quantityDict:state.quantityDict
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onQuantityAdded : (item) => dispatch({
            type:actionTypes.ADD_QUANTITY,
            productName:item
        }),
        onQuantityRemoved : (item) => dispatch({
            type:actionTypes.REMOVE_QUANTITY,
            productName:item
        }),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)