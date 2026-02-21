import { useState } from 'react'
import React,{Component} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './components/CounterComponents'
import Counter from './components/Counter'
import NavBar from './components/NavBar'

class App extends Component {
    state={
      counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
      ]
    };
  handleIncrement=counter=>{
    console.log("clicked")
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});


  }
    

  handleReset=()=>{
    const counter=this.state.counters.map(c=>{
      c.value=0;
      return c;
    })
    this.setState({counters:counter});
  }

   handleDelete= counterId =>{
   const counter= this.state.counters.filter(c => c.id!==counterId);
   this.setState({counters:counter});
   }
  render(){
  return(
    <>
    <NavBar totalCounter={this.state.counters.filter(c=>
      c.value>0).length
    }/>
      <Counter 
      onReset={this.handleReset}
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement} 
      counter={this.state.counters}
      />
    </>
  )
   }
}
  


export default App
