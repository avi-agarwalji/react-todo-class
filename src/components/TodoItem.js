import React from "react";
import styles from "../styles/TodoItem.module.css";

export default class TodoItem extends React.Component {
  state = {
    editing: false,
    updatedTitle: this.props.todo.title
  };

  onchange = (e) => {
    this.setState({
      editing: this.state.editing,
      updatedTitle: e.target.value
    });
  };

  updateTitle = (e, id) => {
    if (e.key === "Enter") {
      this.setState({
        editing: false
      });
      this.props.updateTodoProps(this.state.updatedTitle, id);
    }
  };

  handleEdit = () => {
    this.setState({
      editing: true
    });
  };

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through"
    };

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEdit} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={this.props.todo.completed}
            onChange={() => {
              this.props.handleChangeProps(this.props.todo.id);
            }}
          />
          <button
            onClick={() => {
              this.props.deleteTodoProps(this.props.todo.id);
            }}
          >
            Delete
          </button>
          <span style={this.props.todo.completed ? completedStyle : null}>
            {this.props.todo.title}
          </span>
        </div>
        <input
          onDoubleClick={this.handleEdit}
          type="text"
          style={editMode}
          className={styles.textInput}
          value={this.state.updatedTitle}
          onChange={this.onchange}
          onKeyDown={(e) => this.updateTitle(e, this.props.todo.id)}
        />
      </li>
    );
  }
}
