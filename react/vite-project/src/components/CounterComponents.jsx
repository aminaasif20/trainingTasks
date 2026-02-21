import React, { Component } from 'react';

class CounterComponent extends Component { 
  // state = {
  //   count:this.props.value,
  //   // tags:["tag1","tag2","tag3"]
  // };

  format() { return this.props.counter.value === 0 ? "zero" : this.props.counter.value; }
  // handleIncrement=()=>{
  //   console.log("clicked",this.state.count)
  //   this.setState({count:this.state.count+1

  //   })
  // }
 

  render() {
    
    return (
      <>
      
      <div >
        
        {/* {this.props.children} */}
        
        <span className={this.props.counter.value === 0 ? 'rounded px-3 py-2 bg-yellow-200' : 'rounded px-3 py-2 bg-blue-300'}> {this.format()} </span> 
        <button 
             onClick={()=>this.props.onIncrement(this.props.counter
             )}  className='m-2 hover:bg-gray-400 bg-gray-600 text-white p-2 rounded ' >
            increment
        </button>
        <button 
            onClick={() => this.props.onDelete(this.props.id)} 
            className='m-2 bg-red-500 hover:bg-red-700 text-white p-2 rounded '>
            Delete
        </button>

        {/* {this.state.tags.length=== 0 ? "no tags"
        :
       <ul>
            {
            this.state.tags.map((tag,i)=>
                <li key={i}> {tag +i}</li>
            )
        }
        </ul> 
        } */}
        
      </div>
      </>
    )
  }
}

export default CounterComponent;