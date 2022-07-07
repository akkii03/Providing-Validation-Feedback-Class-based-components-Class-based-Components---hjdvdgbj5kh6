import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			para:false

		}
		
	};
	update() {
		this.setState({para:true});
		
	}


    render() {	
    	return(
			<div id="main">
			<button id="click" onClick={()=>this.update()}>click</button>
			{para?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:null}
		</div>
		)
    }
}


export default App;

