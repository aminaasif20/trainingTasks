import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {store} from './components/reduxToolKit/store'
import './index.css'
import App from './App.jsx'
import TodoApp from './components/doDo/TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>

  // <StrictMode>
  //   {/* <App /> */}
  //   {/* <TodoApp/> */}
  // </StrictMode>,
)
