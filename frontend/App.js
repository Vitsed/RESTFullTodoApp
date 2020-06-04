import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TodoList from './component/item/TodoList';
import AddTodoItem from './component/item/AddTodoItem';
import EditTodoItem from './component/item/EditTodoItem';


function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>React TodoList Application</h1>
                  <Switch>
                      <Route path="/" exact component={TodoList} />
                      <Route path="/todolist" component={TodoList} />
                      <Route path="/add-item" component={AddTodoItem} />
                      <Route path="/edit-item" component={EditTodoItem} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;