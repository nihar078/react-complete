import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [sortDescending, setSortDescending] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle((prevTitle) => {
      if (prevTitle === "My List") {
        return "New Title";
      } else {
        return "My List";
      }
    });
  }, []);


  const changeSortOrderHandler = useCallback(() => {
    setSortDescending((preSortDescending) => !preSortDescending);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList
        title={listTitle}
        items={listItems}
        sortDescending={sortDescending}
      />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeSortOrderHandler}>
        {sortDescending
          ? "Change to Ascending Order"
          : "Change to Descending Order"}
      </Button>
    </div>
  );
}

export default App;
