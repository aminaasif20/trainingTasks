import Button from "./components/Button"
import Counter from "./components/counter"
// import './App.css'
// import Alert from "./components/Alert"
// import { ListGroup } from "./components/ListGroup"
function App() {
    // let items = ["An item", "A second item", "A third item"];
    // let handleSelectItem=(item:string)=>{
    //   console.log("Item selected");
    // }
  
  return (
      <div >
       
        {/* <ListGroup items={items} heading="Items Name List" selectItem={handleSelectItem}/> */}
        {/* <Alert Children="This is an alert"/> */}
        {/* <Button  onClick={()=>{}} pr Children="Click Me" /> */}
        <Counter/>
        {/* </Alert > */}
    </div>
  )
}

export default App
