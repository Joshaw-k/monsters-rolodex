import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state ={
      monsters : [] ,
      searchfields: ''
    }
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({ monsters:data}))
  }
  handlechange = e => this.setState({searchfields: e.target.value})
  render(){
    const {monsters,searchfields} = this.state
    const filterstate = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchfields.toLowerCase())
    )
    return(
          <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox placeholder={'search monsters'} onChange = {this.handlechange}/>
            <CardList monsters = {filterstate}>
            </CardList>
          </div>
        );
      
  }
}
export default App;
