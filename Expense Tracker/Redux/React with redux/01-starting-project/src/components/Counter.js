import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state)=> state.showCounter)

  
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 3 });
  };

  const incrementBy2Handler = () => {
    dispatch({ type: "incrementby2", amount: 2 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  
  const incrementBy5Handler = () => {
    dispatch({ type: "IncrementBy5" });
  };
  
  const decremenentBy5Handler = () => {
    dispatch({ type: "DecremenentBy5" });
  };

  const toggleCounterHandler = () => {
    dispatch({type: "toggle"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy2Handler}>Increment By 2</button>
        <button onClick={increaseHandler}>Increment By 3</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy5Handler}>IncrementBy5</button>
        <button onClick={decremenentBy5Handler}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// // //class-based components // //
// import { Component } from "react";
// import { connect } from "react-redux";
// import classes from "./Counter.module.css";

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   incrementBy5Handler(){
//     this.props.incrementBy5()
//   }

//   decremenentBy5Handler(){
//     this.props.decremenentBy5()
//   }

//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <div>
//           <button onClick={this.incrementBy5Handler.bind(this)}>IncrementBy5</button>
//           <button onClick={this.decremenentBy5Handler.bind(this)}>DecrementBy5</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = dispatch =>{
//   return{
//     increment: ()=> dispatch({type: "increment"}),
//     decrement: ()=> dispatch({type: "decrement"}),
//     incrementBy5: ()=> dispatch({type: "IncrementBy5"}),
//     decremenentBy5: ()=> dispatch({type: "DecremenentBy5"})

//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
