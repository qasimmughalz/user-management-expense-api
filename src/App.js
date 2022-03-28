import './App.css';
import { AddTransaction } from './Components/AddTransaction/AddTransaction';
import { ExpenseList } from './Components/ExpenseList/ExpenseList';

function App() {
  return (
    <div className="App container">
      <div className='col-md-4 m-auto text-center '>
        <ExpenseList/>
        <AddTransaction></AddTransaction>
      </div>
    </div>
  );
}

export default App;
