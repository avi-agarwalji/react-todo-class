import React from "react";

import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

class TodoContainer extends React.Component {
  state = {
    todos: []
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      })
    });
  };

  addTodo = (title) => {
    const todo = {
      id: this.state.todos.length + title.length + 1,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  updateTodo = (title, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    });
    console.log(this.state.todos, title);
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      this.setState({
        todos: todos
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", temp);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodo} />
          <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            updateTodoProps={this.updateTodo}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
