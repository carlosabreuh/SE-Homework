class App extends React.Component {
   tardis = {
  name: 'Time and Relative Dimension in Space',
  caps: false,
}
changeIt = (text) => {
  if (this.state.tardis.caps) {
    this.setState({
      tardis: {
        name: text.toLowerCase(),
        caps: false
      }
    })
  } else {
    this.setState({
      tardis: {
        name: text.toUpperCase(),
        caps: true
      }
    })
  }
}
  render() {
      return(
          <div>
             <DivOne />
          </div>
      )
  }
}
class DivOne extends React.Component {
    render () {
        return(
            <div>
                <DivTwo />
            </div>
        )
    }
}
class DivTwo extends React.Component {
    render () {
        return(
            <div>
               <DivThree />
            </div>
        )
    }
}
class DivThree extends React.Component {
    render () {
        return(
        <div onClick={this.changeIt}>
            <div>
             <h3>Welcome to </h3>
            </div>
             <div>
             <h3>Tardis</h3>
            </div>
        </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector(".container"))