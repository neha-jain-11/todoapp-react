import React, { Component } from "react";
import axios from "axios";
import AddItem from "./AddItem.jsx";
import ListItems from "./ListItems.jsx";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentTodo: "",
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateCurrentTodo = this.updateCurrentTodo.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.saveTodos = this.saveTodos.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get("/api/todos/get");
    this.setState({
      data: res.data,
    });
  }

  addTodo() {
    const currentTodo = this.state.currentTodo;
    this.setState({
      data: [
        ...this.state.data,
        ...[{ id: currentTodo, name: currentTodo, description: currentTodo }],
      ],
      currentTodo: "",
    });
  }

  deleteTodo(event) {
    const id = event.target.dataset.id;
    const index = this.state.data.findIndex((d) => d.id === id);
    const cloneData = [...this.state.data];
    cloneData.splice(index, 1);
    this.setState({
      data: cloneData,
    });
  }

  updateStatus(event) {
    const id = event.target.dataset.todoId;
    const index = this.state.data.findIndex((d) => d.id === id);
    const cloneData = [...this.state.data];
    cloneData[index].status = !cloneData[index].status;
    console.log("cloneData", cloneData);
    this.setState({
      data: cloneData,
    });
  }

  updateCurrentTodo(event) {
    this.setState({
      currentTodo: event.target.value,
    });
  }

  async saveTodos() {
    const res = await axios.post("/api/todos/post", {
      data: this.state.data,
    });
    alert("Saved, Please come back soon");
  }

  render() {
    return (
      <>
        <AddItem
          currentTodo={this.state.currentTodo}
          addTodo={this.addTodo}
          updateCurrentTodo={this.updateCurrentTodo}
        />
        <ListItems
          todos={this.state.data}
          deleteTodo={this.deleteTodo}
          updateStatus={this.updateStatus}
        />
        <button onClick={this.saveTodos}>SAVE</button>
      </>
    );
  }
}

export default Home;
