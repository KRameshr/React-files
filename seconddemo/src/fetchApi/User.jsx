import React, { Component } from "react";
import axios from "axios";
export class User extends Component {
  constructor(props) {
    super(props);
    this.state = { Users: [] };
  }
  componentDidMount() {
    let Api = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(Api)
      .then((res) => this.setState({ Users: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h2>User date</h2>
        {this.state.Users.map((Use) => (
          <div key={Use.id}>
            <h5>{Use.username}</h5>
            <p>{Use.address.geo.lng}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default User;
