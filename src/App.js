import React from 'react';

class App extends React.Component {
 constructor() { 
   super(); 
   this.state = { 
     message: 'Latwans To-Do List!!', 
     newTodo: '' 
   };
 } 

 newTodoChanged(event) { 
  //  console.log(event.target.value);
   this.setState({ 
     newTodo: event.target.value
   }); 
 }

 formSubmitted(event) {
   event.preventDefault(); 
   console.log(this.state.newTodo); 
 }
  
  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={(event) => this.formSubmtted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" /> 
          <button type="submit">Add-Todo</button>
        </form>
      </div>
    );
  }
}

export default App;
