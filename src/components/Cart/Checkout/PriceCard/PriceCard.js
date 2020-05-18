import React,{Component} from 'react'
import './PriceCard.scss'

class PriceCard extends Component{
    render(){
        return(
            <div className="PriceCard">
                PRICE DETAILS
                <hr/>
                Price: <span className="PullPriceRight">{this.props.price}</span> <br/><br/>
                Discount: <span className="PullPriceRight">{this.props.discount}</span>
                <hr/>
                Total Payable <span className="PullPriceRight"> {this.props.payable}</span>
            </div>
        )
    }
}

export default PriceCard