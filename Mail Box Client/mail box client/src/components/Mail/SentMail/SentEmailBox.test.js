import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SentEmailBox from "./SentEmailBox";
import { Provider } from "react-redux";
import store from "../../../store/reduxStore";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("SentEmailBox component", () => {
  test("renders SentEmailBox component", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SentEmailBox
            id={1}
            to="recipient@example.com"
            from="user@example.com"
            subject="Test Subject"
            message="Test Message"
            time={new Date().toISOString()}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("recipient@example.com")).toBeInTheDocument();
    expect(screen.getByText("Test Subject")).toBeInTheDocument();
    // Add more assertions as needed
  });

  test("navigates to SentMail details on link click", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <SentEmailBox
            id={1}
            to="recipient@example.com"
            from="user@example.com"
            subject="Test Subject"
            message="Test Message"
            time={new Date().toISOString()}
          />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText("Test Subject"));

    // Assert that the link navigates to the correct path
    expect(container.innerHTML).toMatch("/sentmail/1");
  });

  test("calls delete handler on delete link click", () => {
    const deleteHandler = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SentEmailBox
            id={1}
            to="recipient@example.com"
            from="user@example.com"
            subject="Test Subject"
            message="Test Message"
            time={new Date().toISOString()}
            onDelete={deleteHandler}
          />
        </MemoryRouter>
      </Provider>
    );

    // Use getByRole to select the delete link based on its role attribute
    const deleteLink = screen.getByRole("link", { name: /delete/i });
    userEvent.click(deleteLink);
    // Assert that the delete handler is called
    expect(deleteHandler).toHaveBeenCalledWith(1, "user@example.com");
  });
});
