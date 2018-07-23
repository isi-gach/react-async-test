import React, { Component } from 'react';

class App extends Component {
  state = { message: '' };

  async componentDidMount() {
    const response = await fetch('http://www.mocky.io/v2/5b558dee320000b604827e0f');
    const { message } = await response.json();
    this.setState({ message });
  }

  render() {
    return <div className="App">{this.state.message}</div>;
  }
}

export default App;
