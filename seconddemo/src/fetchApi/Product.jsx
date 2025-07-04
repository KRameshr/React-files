import React, { Component } from "react";
import axios from "axios";
export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { postData: [] };
  }
  componentDidMount() {
    const Api = "https://jsonplaceholder.typicode.com/posts";
    // fetch(Api)
    // .then(res => res.json([]))
    // .then(data=> {
    //     console.log(data)
    //     this.setState({postData:data})
    // })
    // .catch(err=> console.log(err))
    axios
      .get(Api)
      .then((res) => this.setState({ postData: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>JsonPlaceHolder Post API</h2>
        {this.state.postData.map((post) => (
          <div key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Product;
