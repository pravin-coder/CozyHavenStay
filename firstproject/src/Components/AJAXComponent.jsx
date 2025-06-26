import React, { Component } from 'react';
import axios from 'axios'; // You forgot to import axios

export default class AJAXComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount() fired...");
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("Response received:", response.data);
        this.setState({ responseData: response.data });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    console.log("Application Rendered");
    return (
      <div>
        <h1>Axios Demo</h1>
        <table>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th> 
            </tr>
          <tbody>
            {this.state.responseData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
