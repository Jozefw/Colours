import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {level:500}
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level){
        this.setState({level})
        console.log(level)
    }

    render() {
        const {colors} = this.props.palette;
        const {level} = this.state;
        const colorBoxes = colors[level].map(color=>
            <ColorBox name = {color.name}
                      background = {color.hex} 
                      key = {color.hex}> 
            </ColorBox>)
            return ( 
            <div className ="Palette">
                <Slider 
                defaultValue={level} 
                min={100} 
                max={900}
                step={100}
                onAfterChange={this.changeLevel}> 
                </Slider> 
                <div className = "Palette-colors"> {colorBoxes} </div>
            </div>
            )
        }
    }

    export default Palette