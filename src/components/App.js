import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.State = {
			para:false
		}
		
		
	};
	update() {
		this.setState({para:this.State.para=true});
	}


    render() {	
    	return(
			<div id="main">
			<button id="click" onClick={()=>this.update()}>click</button>
			{this.State.para?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:null}
			
		</div>
		)
    }
}


export default App;

