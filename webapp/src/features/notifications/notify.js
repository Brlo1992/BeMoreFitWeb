import React from "react";

class Notify extends React.Component {
    render(){
        return <li className="notify" style={{backgroundColor:this.props.color}}>
            <p className="notify_content">{this.props.text}</p>
            <button className="notify_dismiss" onClick={this.props.onDismissClick}>x</button>
        </li>
    }

    shouldComponentUpdate(){
        return false;
    }
}

export default Notify;