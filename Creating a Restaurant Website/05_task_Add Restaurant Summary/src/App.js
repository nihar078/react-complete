import { Fragment } from "react";
import Header from "./components/Layout/Header";
import RestaurantsSummary from "./components/Meals/RestaurantsSummary";

function App() {
  return (
    <Fragment>
      <Header />
      <RestaurantsSummary />
    </Fragment>
  );
}

export default App;
