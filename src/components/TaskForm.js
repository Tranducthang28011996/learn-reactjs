import React, { Component } from 'react';

class TaskForm extends Component {

	sendParents = () => {
		var params = "ok"
		this.props.getDataChirld(params);
	}

  render() {
  	var {tasks} = this.props;

    return (
      <div>
        <button className="btn btn-primary" onClick={this.sendParents}>thang</button>
        <h1>{this.props.tasks.name}</h1>
      </div>
    );
  }
}

export default TaskForm;
