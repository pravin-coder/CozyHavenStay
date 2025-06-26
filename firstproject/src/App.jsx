
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import AJAXComponent from './Components/AJAXComponent'
import ClassComponent from './Components/ClassComponent'
import { Contact } from './Components/Contact'
import CounterComponent from './Components/CounterComponent'
import Functional1 from './Components/Functional1'
import { Functional2 } from './Components/Functional2'
import HandlerDemo from './Components/HandlerDemo'

import Hello from './Components/hello'
import Hooksdemo from './Components/Hooksdemo'
import RenderListTable from './Components/RenderListTable'
import Test from './Components/Test'
import Todo from './Components/Todo'
import Welcome from './Components/Welcome'

function App() {
 
  return (
    <>
        <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/todo'> TODO</Link></li>
            <li><Link to='/EventHandler'> EventHandler</Link></li>
            <li><Link to='/Ajax'> AJAX</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/EventHandler' element={<HandlerDemo/>}/>
          <Route path='/Ajax' element={<AJAXComponent/>}/>
          <Route path='/contact' element={<Contact name="Dean" details={{ age: 50, subject: "Administration" }} contact={[789, 9087]} 
      styleObj={{color:'red',backgroundColor:'green'}}/>
}/>

        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
