import React, { Component } from 'react';
import TaskForm from './components/TaskForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "1",
      name: "thang"
    }
  }

  generalData = () => {
    this.setState({
      name : "thang dep tria"
    });
  }

  getDataChirld = (params) => {
    console.log(params);
  }

  componentWillMount() {
    this.setState({
      name : "thang dep tria"
    });
  }

  render() {
    var {id, name} = this.state;

    return (
      <div>
        <TaskForm 
          tasks = {this.state}
          getDataChirld = {this.getDataChirld}
        />
        <button onClick={this.generalData}>thang</button>
      </div>
    );
  }
}

export default App;
