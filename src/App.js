import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      hackers: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ hackers: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { hackers, searchField } = this.state;
    const filteredhackers = hackers.filter(hacker =>
      hacker.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>hackers Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList hackers={filteredhackers} />
      </div>
    );
  }
}

export default App;