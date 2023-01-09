//import { useState , useEffect } from 'react';
import { Component } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';
import './App.css';


// const App = () => {
//   const [searchField,setSearchField] = useState('');
//   const [monsters,setMonsters] = useState([]);
//   const [filteredMonsters,setFilteredMonsters] = useState(monsters); 


//   useEffect( () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => setMonsters(users));
//   }, []);

//   useEffect( () => {
//     const newFilteredMonsters =monsters.filter((monsters) =>{
//     return monsters.name.toLocaleLowerCase().includes(searchField);
//     });

//   setFilteredMonsters(newFilteredMonsters);
//   }, [monsters , searchField]);

//   const {onSearchChange} =(event) => {
//     const searchFieldString = event.target.value.toLocaleLowerCase();
//     setSearchField(searchFieldString);
//   };



//    return (
//     <div className='App'>
//       <h1 className='app-title'>Monsters Rolodex</h1>
//       <SearchBox 
//       className='monsters-search-box'
//       onChangeHandler={onSearchChange}
//       placeholder='search monsters'
//       />    
//       < CardList monsters={filteredMonsters} />
//     </div>  
//    )  
// }

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField: ''
    };
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState( () => {
        return {monsters : users}
      }));
  }

  onSearchChange =  (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState( () => {
      return {searchField};
    })
  }

  render(){ 


    const { monsters,searchField } =this.state;
    const { onSearchChange} = this;


    const filteredmonsters= monsters.filter( (monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters' />    
        <CardList monsters ={filteredmonsters} />
      </div>
    );
  }
  
}

export default App;
