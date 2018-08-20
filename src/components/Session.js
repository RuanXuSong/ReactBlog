import React,{Component} from 'react';
export default class HeadTitle extends Component{
    render(){
        return(
            <div className="session-wrap">
                {this.props.title?<div className="session-head">{this.props.title}</div>:''}
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}