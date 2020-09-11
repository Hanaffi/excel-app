import React, {Component} from 'react';
import TodoItems from './components/TodoItems/Todo';
import AddItem from './components/AddItems/AddItem';
class App extends Component{

  state={
    items:[
      
    ]
  }

  addItem= (item)=>{
    item.id = Math.random()
    let items = this.state.items;
    items.push(item);
    this.setState({items:items});
  }



  deleteItem = (id) =>{

    

    /* 
    // Method one
    let items = this.state.items;
    let i= items.findIndex( item => item.id === id)
    items.splice(i , 1);
    this.setState({items:items})
    */
    
    // Method two
    let items = this.state.items.filter( item => {
      return item.id !== id
    })
    this.setState({items})



  }

  render()
  {
    return(
      <div className="App container">
          <h1 className="text-center">Excel List</h1>
          <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
          <AddItem addItem={this.addItem} />
      </div>
    )
  }
}
export default App;
