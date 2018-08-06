import React,{Component} from 'react';
export default class CodeSession extends Component{
    render(){
        return(
            <div className="CodeSession">{this.props.children}</div>
        )
    }
}