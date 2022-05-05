import React from "react";

export default class InputTodo extends React.Component {
  state = {
    title: ""
  };

  onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: ""
      });
    } else {
      alert("Please write todo item!");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo"
          name="title"
          value={this.state.title}
          onChange={this.onchange}
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}
