import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmailBox from "./EmailBox";
import { Provider } from "react-redux";
import store from "../../store/reduxStore";
import { BrowserRouter } from "react-router-dom";

describe("EmailBox Component", () => {
  test("should display blue dot for unread messages", () => {
    const mockProps = {
      id: "1",
      title: "Sender",
      to: "Recipient",
      subject: "Test Subject",
      message: "Test Message",
      time: Date.now(),
      isRead: false,
    };

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <EmailBox {...mockProps} />
        </BrowserRouter>
      </Provider>
    );

    // Check if the blue dot is present when the message is unread
    const blueDot = container.querySelector(".emailRead > svg");
    expect(blueDot).toBeInTheDocument();
  });

  test("should not display blue dot for read messages", () => {
    const mockProps = {
      id: "1",
      title: "Sender",
      to: "Recipient",
      subject: "Test Subject",
      message: "Test Message",
      time: Date.now(),
      isRead: true,
    };

    const { container } = render(<Provider store={store}>
        <BrowserRouter>
          <EmailBox {...mockProps} />
        </BrowserRouter>
      </Provider>);

    // Check if the blue dot is not present when the message is read
    const blueDot = container.querySelector(".emailRead > svg");
    expect(blueDot).toBeNull();
  });
});
