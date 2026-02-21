import React, { Component } from 'react'
import CounterComponent from './CounterComponents';
class Counter extends Component {
    
  render(){
    return(
    <div>
      <button
      onClick={this.props.onReset}
      className='rounded px-3 my-4 py-2 bg-blue-300'>Reset</button>
     {this.props.counter.map(counters=> 
     <CounterComponent 
         key={counters.id} 
         value={counters.value} 
         id={counters.id} 
         onDelete={this.props.onDelete}
         onIncrement={this.props.onIncrement}
         counter={counters}
     />
        
     )}
    </div>
  )
  
  }
}
export default Counter