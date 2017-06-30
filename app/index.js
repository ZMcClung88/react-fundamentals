var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

//state
//lifecycle event
//UI

class App extends React.Component {
  render(){
    return (
      <div>
        Hello React Training!
      </div>
    )
  }
}

class Badge extends React.Component {
  render () {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>Username: {this.props.username}</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
