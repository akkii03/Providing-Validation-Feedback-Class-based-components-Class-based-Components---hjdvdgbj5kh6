import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			para:""
		}
		
	};
	update() {
		console.log("btn was clicked");	
		this.setState({para:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"})
	}


    render() {
    	return(
			<div id="main">
			<button id="click" onClick={()=>this.update()}>click</button>
			<p id="para">{this.state.para}</p>
			
		</div>
    	);
    }
}


export default App;

