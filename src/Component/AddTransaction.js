import React,{useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const AddTransaction = () => {
  let [text, setText] = useState('')
  let [amount, setAmount] = useState('')
  let [id, setId] = useState(0)
  
  const {addTransaction} = useContext(GlobalContext)

  const onSubmit = e => {
    if (amount == 0 || amount == null) {
      alert("Enter Some Amount");
      
      
    } 
    else {
      setId(Math.floor(id + 1));
      e.preventDefault();
      
      const newTransaction = {
      id: id,
      text,
      amount: + amount
      }
      addTransaction(newTransaction);
      
  
      
    setText("");
    setAmount("");
  }

}
  return (
        <>
            <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
       </ >
    )
}
