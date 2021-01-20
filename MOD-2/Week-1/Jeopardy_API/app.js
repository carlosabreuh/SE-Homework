class App extends React.Component {
	state = { // Objects 
		score: 0,
		category: '',// Key:Values
		points: 0, 
		clue: '',
		answer: '',
		isRevealed: true
	}
	getQuestion = () => {
		//fetch(url as a string)
		// same as movie and taco code
		fetch('http://jservice.io/api/random')  //GET request by default
            // .then(function that relies on fetch)
            
            .then((response) => { //.then is a fuction that the output returns a promise " .then "this is the fuction to call".
                //annonymous function/(parameter)
				return response.json();
            })

			.then((json) => {
				// json[0] is the object we want
				console.log(json[0]);
				const data = json[0];// this exists because the JSON is an array of a single object.  
				this.setState({ //setState is the fuction
					category: data.category.title,
					points: data.value,
					clue: data.question, // NEW values of the state
					answer: data.answer
				})
			})
    }
    
            isRevealed = () => { //fucntion to reveal the question after it has been fetched.
                this.setState({isRevealed: !this.state.isRevealed})
            }

            increasetItem = () => { // Function to increase using the "Increase" button
                this.setState({ score: this.state.score +1});
            }
            decreaseItem = () => { // Function to decrease using the "decrease" button
                this.setState({ score: this.state.score -1});
            }

            resetItems = () => {
                this.setState({ score: 0}) //this is already targeting the value i want to change
            }

	render() {
		return (
			<div >
				<h1 className="tittle"> Welcome to Jeopardy </h1>
				<h2> Score: <span>{this.state.score}</span> </h2>
				<div class="buttons" >
					<button className="decr" onClick={this.decreaseItem}> Decrease</button>
					<button className="incr" onClick={this.increasetItem}> Increase </button>
					<button className="res"  onClick={this.resetItems}> Reset </button>
				</div>
				<h2> Let's Play! </h2>
				<button className="getquest" onClick={this.getQuestion}> Get Question </button>
				<h2> Category: <span>{this.state.category}</span> </h2>
				<h3> Points: <span>{this.state.points}</span> </h3>
				<h3> Answer: <span>{this.state.clue}</span> </h3>
				<button className="reveal" onClick={this.isRevealed}> Click to Reaveal Question </button>
				{this.state.isRevealed ?<h3> Question: <span>{this.state.answer}</span> </h3>: ''}
			</div>
			)
	}
}
// check that your target div matches the selector
ReactDOM.render(<App/>, document.getElementById('container'));