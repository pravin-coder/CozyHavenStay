import { useState } from 'react';
import './App.css';
import UsersTable from './components/UsersTable';
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import { AddUser } from './components/AddUser';
import { Error } from './components/Error';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <BrowserRouter>
      {/* <HeaderComponent/> */}
      <div>
        <Routes>
          <Route index element={<UsersTable/>}/>
          <Route path="/" element={<UsersTable/>}/>
          <Route path="/Allusers" element={<UsersTable/>}/>
          <Route path="/Adduser" element={<AddUser/>}/>
          <Route path="/*" element={<Error/>}/>
          
        </Routes>
      </div>

      {/* <FooterComponent/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
