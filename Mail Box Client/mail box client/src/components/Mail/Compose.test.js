import { render, screen } from "@testing-library/react";
import ComposeEmail from "./Compose";
import { Provider } from "react-redux";
import store from "../../store/reduxStore";

describe("ComposeEmail Component", () => {
  test("render the to label component", () => {
    render(
      <Provider store={store}>
        <ComposeEmail />
      </Provider>
    );
    const toLabelElement = screen.getByText("To");
    expect(toLabelElement).toBeInTheDocument();
  });
});
