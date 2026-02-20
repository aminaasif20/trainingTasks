import React, { Component } from 'react';

class CounterComponent extends Component { 
  state = {
    count:1,
    tags:["tag1","tag2","tag3"]
  };

  format() {
    return this.state.count === 0 ? "zero" : "not zero";
  }

  render() {
    return (
      <div> 
        <span className={this.state.count === 0 ? 'roundedl px-3 py-1  bg-yellow-200' : 'bg-green-200'}>
          {this.format()}
        </span>
        <button className='m-2 bg-gray-200 p-2 rounded ' >increment</button>
        <ul>
            {
            this.state.tags.map((tag,i)=>
                <li key={i}> {tag +i}</li>
            )
        }
        </ul>
      </div>
    )
  }
}

export default CounterComponent;