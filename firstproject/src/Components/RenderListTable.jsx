import React, { Component } from 'react';

export default class RenderListTable extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      skillSet: ["Devops", "Java", "Angular", "React"],
      details: [
        { name: "Arun", age: 32 },
        { name: "Siva", age: 32 },
        { name: "Arun", age: 32 },
        { name: "Siva", age: 32 }
      ]
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.skillSet.map((skill, key) => (
            <li key={key}>{key}: {skill}</li>
          ))}
        </ul>

        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.details.map((detail, k) => (
              <tr key={k}>
                <td>{detail.name}</td>
                <td>{detail.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
