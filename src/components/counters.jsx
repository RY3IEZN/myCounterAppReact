/** @format */

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const { counters, onReset, onDelete, onIncrement, onDecrement } =
      this.props;

    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
