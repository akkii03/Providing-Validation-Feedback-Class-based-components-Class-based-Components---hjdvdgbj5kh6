import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		// this.state ={
		// 	para:""
		// }
		const [dis,setDis] = useState("");
		handler = ()=>{
			setDis("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
			console.log("btn was clicked");
		}
	};



    render() {
    	return(
			<div id="main">
			<button id="click" onClick={this.handler}>click</button>
			<p id="para">{dis}</p>
			
		</div>
    	);
    }
}


export default App;

