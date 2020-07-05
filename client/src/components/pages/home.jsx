import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get("/api/todos/get");
    this.setState({
      data: res.data,
    });
  }

  render() {
    return (
      <>
        {this.state.data.map((d, i) => {
          return (
            <>
              <span key={`span-${i}`}>{d.name}</span>
              <br key={`br-${i}`} />
            </>
          );
        })}
      </>
    );
  }
}

export default Home;
