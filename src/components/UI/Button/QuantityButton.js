import React,{Component} from 'react'
import './QuantityButton.scss'

class QuantityButton extends Component{
    onChangeHandler(event){
        this.setState({quantity:event.target.value})
    }

    render(){
        return(
            <div className="QuantityButton">
                <button onClick={()=>this.props.quantityHandler('sub',this.props.displayPrice,this.props.actualPrice,this.props.name)}>-</button>
                    <input 
                    type="number" 
                    min="0" 
                    displayprice={this.props.displayPrice} 
                    actualprice={this.props.actualPrice}
                    value={this.props.quantity}
                    onChange={(event)=>this.onChangeHandler(event)}></input>
                <button onClick={()=>this.props.quantityHandler('add',this.props.displayPrice,this.props.actualPrice,this.props.name)}>+</button>
            </div>
        )
    }
}

export default QuantityButton