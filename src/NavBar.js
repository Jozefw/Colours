import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './NavBar.css';

 class NavBar extends Component {
     constructor(props){
         super(props);
         this.state = { }
     }
    render() {
        const {level,changeLevel} = this.props;
        return (
            <header className="NavBar">
            <div className="logo">
                <a href="#">ColorSlider</a>
            </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider 
                        defaultValue={level} 
                        min={100} 
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}> 
                        </Slider> 
                        </div>

                </div>
            </header>
        )
    }
}

export default NavBar
