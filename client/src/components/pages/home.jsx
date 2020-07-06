import React, { Component } from "react";
import { connect } from "react-redux";
import AddItem from "./AddItem.jsx";
import * as Todos from "../../services/todos";
import ListItems from "./ListItems.jsx";
import { addTodo } from "../../middlewares/thunk";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodo: "",
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateCurrentTodo = this.updateCurrentTodo.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.saveTodos = this.saveTodos.bind(this);
  }

  async componentDidMount() {
    const data = await Todos.getTodos();
    console.log("yooo1");
    this.props.method3(data);
  }

  addTodo() {
    const currentTodo = this.state.currentTodo;
    this.setState({
      currentTodo: "",
    });
    this.props.method1([
      ...this.props.todos,
      ...[{ id: currentTodo, name: currentTodo, description: currentTodo }],
    ]);
  }

  deleteTodo(event) {
    const id = event.target.dataset.id;
    const index = this.props.todos.findIndex((d) => d.id === id);
    const cloneData = [...this.props.todos];
    cloneData.splice(index, 1);
    this.props.method1(cloneData);
  }

  updateStatus(event) {
    const id = event.target.dataset.todoId;
    const index = this.props.todos.findIndex((d) => d.id === id);
    const cloneData = [...this.props.todos];
    cloneData[index].status = !cloneData[index].status;
    this.props.method1(cloneData);
  }

  updateCurrentTodo(event) {
    this.setState({
      currentTodo: event.target.value,
    });

    this.props.method2(event.target.value);
  }

  async saveTodos() {
    await Todos.saveItems(this.props.todos);
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
          todos={this.props.todos}
          deleteTodo={this.deleteTodo}
          updateStatus={this.updateStatus}
        />
        <button onClick={this.saveTodos}>SAVE</button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    method1: (data) => {
      return dispatch({
        type: "GET_TODOS",
        data: data,
      });
    },
    method2: (data) => {
      return dispatch({
        type: "SET_ITEM",
        data: data,
      });
    },
    method3: () => {
      return dispatch(addTodo());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    currentTodo: state.item.item,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
