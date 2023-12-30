import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShowMail from "./ShowMail";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/reduxStore";

describe("ShowMail Component", () => {
  test("renders email details correctly", () => {
    const mockEmail = {
      id: "1",
      subject: "Test Subject",
      title: "Sender",
      to: "Recipient",
      message: "Test Message",
      time: Date.now(),
    };

    render(
    //   <Provider store={store}>
        {/* <BrowserRouter> */}
          (<ShowMail />),
      {
        wrapper: ({ children }) => (
      <Provider store={store}>
          <BrowserRouter>
            {React.cloneElement(children, { location: { state: { email: mockEmail } } })}
          </BrowserRouter>
      </Provider>

        ),
      }
    );

    // Check if email details are rendered
    expect(screen.getByText(mockEmail.subject)).toBeInTheDocument();
    expect(screen.getByText(`From: ${mockEmail.title}`)).toBeInTheDocument();
    expect(screen.getByText(`To: ${mockEmail.to}`)).toBeInTheDocument();
    // expect(screen.getByText(/Test Message/)).toBeInTheDocument();
  });

  test("renders formatted time correctly", () => {
    const mockEmail = {
      id: "1",
      subject: "Test Subject",
      title: "Sender",
      to: "Recipient",
      message: "Test Message",
      time: Date.now(),
    };

    render(
          (<ShowMail />),
      {
        wrapper: ({ children }) => (
      <Provider store={store}>

          <BrowserRouter>
            {React.cloneElement(children, { location: { state: { email: mockEmail } } })}
          </BrowserRouter>
      </Provider>

        ),
      }
    );

    // Check if formatted time is rendered
    const formattedTime = screen.getByText(
      /(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \w+ \d+, \d{4}, \d{1,2}:\d{2} (AM|PM)/
    );
    expect(formattedTime).toBeInTheDocument();
  });
});
