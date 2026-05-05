import { Component } from "react";

class OldCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>{name}</h1>
        <div className="mt-6 flex items-center gap-4">
          <button className="py bg-blue-400 px-4" onClick={() => {this.setState({count: this.state.count + 1})}}>
            +
          </button>
          <h2>{this.state.count}</h2>
          <button className="py bg-blue-400 px-4" onClick={() => {this.setState({count: this.state.count - 1})}}>
            -
          </button>
        </div>
      </>
    );
  }
}

export default OldCounter;
