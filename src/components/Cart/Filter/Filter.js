import React,{Component} from 'react'
import '../Filter/Filter.scss'
import 'react-input-range/lib/css/index.css'

class Filter extends Component {
    state = {
        minValue: 0,
        maxValue: 20000,
        step: 1000,
        firstValue: null,
        secondValue: null
    };


    componentWillMount(){
        this.setState({firstValue: this.state.minValue, secondValue: this.state.maxValue});
    }

    handleChange(event,name){
        let value = event.target.value;
        if(name === "second"){
                if(parseInt(this.state.firstValue) < parseInt(value)){
                this.setState({secondValue:value});
            }
        }
        else{
                if(parseInt(value) < parseInt(this.state.secondValue)){
                this.setState({firstValue: value});
            }
        }
    }

    render(){
        return(
            <div className="Filter">
                Filters
            <div>
            <div className="rangeValues">Range : {this.state.firstValue} - {this.state.secondValue}</div>
            <section className="range-slider">
                <input type="range" value={this.state.firstValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step}  onChange={(event)=>this.handleChange(event, "first")}/>
                <input type="range" value={this.state.secondValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step} onChange={(event)=>this.handleChange(event, "second")}/>
            </section>
            </div>
            <br/><br/>
            <div className="BtnDiv">
                <button className="Button" onClick={()=>this.props.applyRangeFilter(this.state.firstValue,this.state.secondValue)}>Apply</button>
            </div>
            </div>
        )
    }
}

export default Filter