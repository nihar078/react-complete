import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const toggleCounterHandler = () => {};

  const incrementHandler = () =>{
    dispatch({type: "increment"})
  }

  const decrementHandler = () =>{
    dispatch({type: "decrement"})
  }

  const incrementBy5Handler = () =>{
    dispatch({type: "IncrementBy5"})
  }

  const decremenentBy5Handler = () =>{
    dispatch({type: "DecremenentBy5"})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy5Handler}>IncrementBy5</button>
        <button onClick={decremenentBy5Handler}>DecremenentBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
 
export default Counter;
