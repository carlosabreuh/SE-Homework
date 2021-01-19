class App extends React.Component {
  state = {
    groceries: groceries,
    item: "",
    quantity: 0,
    units: "",
  }; 
  handleChange = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      this.setState({ [event.target.id]: event.target.value });
    }
  };
  handleTextChange = (event) => {
    const re = /[A-Za-z]/gi;
    if (event.target.value === "" || re.test(event.target.value)) {
      this.setState({ [event.target.id]: event.target.value });
    }
  };

  
  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      item: this.state.item,
      quantity: this.state.quantity,
      units: this.state.units,
      isPurchased: true,
    };
    this.setState({
      groceries: [newItem, ...this.state.groceries],
      item: "",
      quantity: 0,
      units: "",
    });
  };

  render() {
    const listStyles = { color: "orange" };
    return (
      <div className="groceriesApp">
        <h1>Welcome to Online Shopping!!</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Item </label>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleTextChange}
            id="item"
            placeholder="Name of the item"
          />
          <br />
          <br />
          <label htmlFor="quantity">Quantity </label>
          <input
            type="number"
            value={this.state.quantity}
            onChange={this.handleChange}
            id="quantity"
          />
          <br />
          <br />
          <label htmlFor="units">Units </label>
          <input
            type="units"
            value={this.state.units}
            onChange={this.handleTextChange}
            id="units"
            placeholder="Enter name of units"
          />
          <input type="submit" />
          <br />
        </form>

        <div>
          <h2>Preview our new item</h2>
          <h3>
            {this.state.item} {"  "} {this.state.quantity} {"  "}
            {this.state.units}
          </h3>
        </div>

        <ul>
          {this.state.groceries.map((grocery) => {
            return grocery.isPurchased ? (
              <li>
                <span style={listStyles}>Item: </span>
                {grocery.item}
                {"  "}
                <span style={listStyles}>Qty: </span>
                {grocery.quantity}
                {"  "}
                <span style={listStyles}>Units: </span>
                {grocery.units}
                {"  "}
              </li>
            ) : null;
          })}
        </ul>
      </div>
    );
  }
} //end of class App


const groceries = [
  {
    item: "sugar",
    brand: "Domino",
    units: "Family Pack",
    quantity: 3,
    isPurchased: true,
  },
  {
    item: "Milk",
    brand: "Wesley Farms",
    units: "one Gallon",
    quantity: 1,
    isPurchased: true,
  },
  {
    item: "Eggs",
    brand: "Eggland Best",
    units: "one carton",
    quantity: 1,
    isPurchased: true,
  },
];
ReactDOM.render(<App />, document.querySelector(".container"));
