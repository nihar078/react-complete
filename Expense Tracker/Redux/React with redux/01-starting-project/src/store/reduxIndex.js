import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "IncrementBy5") {
    return {
      counter: state.counter + 5,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
    };
  }

  if(action.type === "incrementby2"){
    return{
        counter: state.counter + action.amount
    }
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  if (action.type === "DecremenentBy5") {
    return {
      counter: state.counter - 5,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
