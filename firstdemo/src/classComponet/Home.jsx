import React, { Component } from "react";
import axios from "axios";
import propTypes from "prop-types";
export class Home extends Component {
  title = "home";
  course = ["a"];
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      PostData: [],
    };
  }
  Inc = () => {
    this.setState({ count: this.state.count + 5 });
  };
  Dec = () => {
    this.setState({ count: this.state.count - 5 });
  };

  //
  componentDidMount() {
    const Api = "https://jsonplaceholder.typicode.com/posts";
    // fetch(Api)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState({ PostData: data });
    //   })
    //   .catch((err) => console.log(err));
    axios
      .get(Api)
      .then((res) => this.setState({ PostData: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>{this.title}</h2>
        {this.course.length > 0 ? (
          <>
            <ul>
              {this.course.map((val, ind) => (
                <li key={ind}>{val}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>no course are found </p>
        )}
        {this.props.my.name} dotinf {this.props.my.age} <br />
        <ul>
          {this.props.mya.map((val, ind) => (
            <li>{val}</li>
          ))}
        </ul>
        <>
          {this.state.count}
          <button onClick={this.Inc}>++</button>
          <button onClick={this.Dec}>--</button>
        </>
        {/*  api fecting  */}
        {this.state.PostData.map((data) => (
          <div key={data.id}>
            <hr />
            <h5>{data.title} </h5>
            <p>{data.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
Home.propTypes = {
  name: propTypes.string.isRequired,
};
export default Home;

// rce for short command for creating the react class components
