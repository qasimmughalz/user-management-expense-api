import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddTransaction } from './Components/AddTransaction/AddTransaction';
import { ExpenseList } from './Components/ExpenseList/ExpenseList';
import { Login } from './Components/Login/Login';
import { SignUp } from './Components/Login/SignUp';





function App() {

  return (
    <div className="App container">
      <div className='col-md-4 m-auto text-center '>
       <Routes>
        
          <Route path='/' element={<Login/>}></Route>
          <Route path='/list' element={<ExpenseList/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<Login/> }></Route>
       
          </Routes>
      
      </div>
    </div>
  );
}

export default App;
