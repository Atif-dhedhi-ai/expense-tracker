import React from 'react';
import { Header } from './Component/header.js';
import { Balance } from './Component/Balance'
import { IncomeExpense } from './Component/IncomeExpense'
import {TransactionList} from './Component/TransactionList'
import {AddTransaction} from './Component/AddTransaction'


import './App.css';
import { GlobalProvider } from './Context/GlobalState.js';

function App() {
  return (
    <GlobalProvider>

      <Header />
      <div className="container">
      <Balance />
      </div>
     
<IncomeExpense/>
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
