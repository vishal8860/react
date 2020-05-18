import React,{Component} from 'react'
import '../Sort/Sort.css'

class Sort extends Component{
    render(){
        return(
            <div className="Sort">
                <strong>Sort By : </strong>
                <button onClick={()=>this.props.sortItems('HL')}>Price--High Low</button> 
                <button onClick={()=>this.props.sortItems('LH')}>Price--Low High</button>
                <button onClick={()=>this.props.sortItems('DS')}>Discount</button>
            </div>
        )
    }
}

export default Sort