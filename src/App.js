import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      hackers: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { hackers: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (event)=> {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=> {
      return {searchField};
    })}



  render() {

    const { hackers, searchField} = this.state;
    const {onSearchChange} = this;


    const filteredhackers = hackers.filter((hacker)=>{
      return hacker.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div className="App">
        <input className="Search-box" type='search' placeholder="Search Here...."  onChange={onSearchChange}/>
        {filteredhackers.map((hacker) => {
          return (
            <div key={hacker.id}>
              <h1>{hacker.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
