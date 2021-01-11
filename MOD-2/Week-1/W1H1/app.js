// import "./styles.css";




class App extends React.Component {
  render () {
    return(
    <div id="container">
    <Sidebar />
    <Reviews />
    <Visitors />
    </div>
    )}
};

class Sidebar extends React.Component {
  render () {
      return(
    <div id="sidebar"> 
    <h2>Dashboard</h2>
    <h2>Widget</h2>
    <h2>Reviews</h2>
    <h2>Customers</h2>
    <h2>Online Analysis</h2>
    <h2>Settings</h2>
     </div>
    )}
};

class Reviews extends React.Component {
  render () {
      return(
    <div id="reviews">
        <div id="rev">
            <h2>Reviews</h2>
            <h3>1,281</h3>
        </div>
        <div id="rev">
            <h2>Average Rating</h2>
            <h3>4.6</h3>
        </div>
        <div id="rev">
            <h2>Sentiment Analysis</h2>
            <h3>960</h3>
            <h3>122</h3>
            <h3>321</h3>        
        </div>
    </div>
    )}
};


class Visitors extends React.Component {
  render () {
      return(
    <div id="visitors">
        <div id="vis">
            <h1>Website Visitors</h1>
            <h2>821</h2>

        </div>
        <div id="vis">
            <img src="graph.svg"/>
        </div>
    </div>
    )}
};

ReactDOM.render(<App />, document.querySelector('.container'));