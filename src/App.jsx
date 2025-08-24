import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleIncrementBy = () => {
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>-</button>
      <br /><br />
      <input type="number" placeholder='enter the number' onChange={(e) => setAmount(e.target.value)} />
      <br /><br />
      <button onClick={handleIncrementBy}>Increment by </button>
    </>
  )
}

export default App
