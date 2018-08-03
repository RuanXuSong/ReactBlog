import React,{Component} from 'react';
export default class HeadTitle extends Component{
    render(){
        return(
            <div className="head-title">{this.props.title}</div>
        )
    }
}