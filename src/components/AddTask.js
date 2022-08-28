import React from "react";

class AddTask extends React.Component {
  state = {
    title: "",
    description: "",
    isCompleted : false,
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.description === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addTaskHandler(this.state);
    this.setState({ title: "", description: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>New Task</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Details"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
