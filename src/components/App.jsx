import React, {Component} from "react";
import Todolist from "./Todolist/Todolist";
import TodoEditor from "./TodoEditor";
import shortid from "shortid";
import Filter from "./Filter"



class App extends Component {
  state = { 
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
   };

   addTodo = name => {
    console.log(name)

    const contact = {
      id: shortid.generate(),
      name,
      completed: false
     }
    
     this.setState(prevState => ({
       contacts: [contact, ...prevState.contacts]
     }))

   };

   

   deleteTodo = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
   }


    changeFilter = e => {
      this.setState({filter: e.currentTarget.value})
    }


  render() { 

  

    const visibleTodos = this.state.contacts.filter(contact => contact.name.includes(this.state.filter))

    return (
    <>
    <h1>Phonebook</h1>
    <TodoEditor onSubmit={this.addTodo}/>
    <h1>Contacts</h1>
    <Filter value={this.state.filter} onChange={this.changeFilter}/>
    <Todolist   contacts={visibleTodos} onDeleteTodo={this.deleteTodo}/>
     </>
    );
  }
}

export default App;  