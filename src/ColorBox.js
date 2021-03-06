import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./ColorBox.css";

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {copied:false};
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState(){
        this.setState({copied:true},()=>{
            setTimeout(()=>this.setState({copied:false}),1500)
        })
    }
    render() {
        const {copied} = this.state;
        const {background,color,name} = this.props;
        return (
            <CopyToClipboard text={color} onCopy={this.changeCopyState}>
            <div className="ColorBox" style={{background}}>
                <div style={{background}} className={`copy-overlay ${copied  && "show"} `}></div>
                    <div className={`copy-mssg ${copied && "show"}`}>
                        <h1 className="Copied">copied</h1>
                        <p>{this.props.name}</p>
                    </div>
                
               <div className="copy-container">
                   <div className="box-content">
                       <span>{name}</span>
                   </div>
                   <button className="copy-button">Copy</button>
               </div>
               <span className="see-more">More</span>
            </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox
