class App extends React.Component {
    state = {
        baseURL: 'http://taco-randomizer.herokuapp.com/random/?full-tack=true',
        taco: '',
        loaded: false
    }
    componentDidMount() {
        this.tacoType()
    }
    tacoType = () => {
        fetch(this.state.baseURL)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    this.setState({
                        taco: json,
                        // movieTitle: ''
                        loaded: true
                    }),
                    err => console.log(err)
                })
    }
    render() {
        console.log('in render', this.state.taco.shell);
        // console.log(this.state.taco.shell.name)
//                <h1>Shell: {this.state.taco.shell.name}</h1>
    return (
            <div>
                <h2>Random Taco</h2>
                {(this.state.loaded) ? <h1>Shell: {this.state.taco.shell.name}</h1>:''}
                {(this.state.loaded) ? <h1>Mixin: {this.state.taco.mixin.name}</h1>:''}
            </div>
        )
    }
}
ReactDOM.render(
    <App />, 
    document.querySelector('.container')
)


















