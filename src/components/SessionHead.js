import React,{Component} from 'react';
export default class HeadTitle extends Component{
    render(){
        return(
            <div className="session-head">{this.props.title}</div>
        )
    }
}