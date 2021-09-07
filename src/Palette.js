import React, {Component} from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './Palette.css';


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
               <NavBar level={level} changeLevel={this.changeLevel}></NavBar>
                <div className = "Palette-colors"> {colorBoxes} </div>
            </div>
            )
        }
    }

    export default Palette