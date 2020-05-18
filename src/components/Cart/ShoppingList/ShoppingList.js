import React,{Component} from 'react'
import {connect} from 'react-redux'
import Cart from '../../../../src/cart.json'
import Item from '../Item/Item'
import {Row,Col} from 'react-bootstrap'
import Header from '../Header/Header'
import Sort from '../Checkout/Sort/Sort'
import Filter from '../Filter/Filter'
import '../ShoppingList/ShoppingList.scss'
import * as actionTypes from '../../../store/actions'

class ShoppingList extends Component{
    state = {
        itemList:Cart,
        loading:true,
    }

    componentDidMount(){
        this.setState({itemList:Cart,loading:false})
    }

    sortHandler(identifier){
        const items = this.state.itemList.items
        if(identifier==='HL'){
            items.sort(function(a,b){return b.price.actual-a.price.actual})
        }
        if(identifier==='LH'){
            items.sort(function(a,b){return a.price.actual-b.price.actual})
        }
        if(identifier==='DS'){
            items.sort(function(a,b){return b.discount-a.discount})
        }
        const itemListC = this.state.itemList
        itemListC.items = items
        this.setState({itemList:itemListC})
    }

    rangeFilter(minValue,maxValue){
        const items = this.state.itemList.items
        const filteredItems = []
        for(let item in items){
            if ((items[item].price.actual >= minValue) && (items[item].price.actual <= maxValue)){
                filteredItems.push(items[item])
            }
        }
        const itemListC = this.state.itemList
        itemListC.items = filteredItems
        this.setState({itemList:itemListC})
    }

    render(){
            const listItems = this.state.itemList.items.map(
                item =>{
                    return (<Item 
                    key = {item.name}   
                    image={item.image}
                    discount={item.discount}
                    actualPrice={item.price.display}
                    displayPrice={item.price.actual}
                    name={item.name} addItem={(item)=>this.props.onProductAdded(item)}></Item>)
                }
            );
        return(
            <div>
                <Header selectedItems={this.props.selectedProducts}></Header>
                    <Row className="col-md-12">
                    <Col md={2}>
                        <Filter applyRangeFilter={(minValue,maxValue)=>this.rangeFilter(minValue,maxValue)}></Filter>
                    </Col>
                    <Col md={10} className="ItemLists">
                        <Sort items={Cart} sortItems={(identifier)=>this.sortHandler(identifier)}></Sort>
                        {listItems}
                    </Col>
                    </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedProducts : state.selectedItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onProductAdded : (item) => dispatch({
            type:actionTypes.ADD_TO_CART,
            productName:item
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList);