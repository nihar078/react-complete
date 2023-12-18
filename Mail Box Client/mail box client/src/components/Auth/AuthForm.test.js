import { render, screen } from "@testing-library/react";
import AuthForm from "./AuthForm";
import userEvent from "@testing-library/user-event";
import { createStore } from "redux";
import authReducer from "../../store/authSlice";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = createStore(authReducer);

describe("Auth Form Component", () => {
  test("render signup heading", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthForm />
        </BrowserRouter>
      </Provider>
    );

    const signupElements = screen.getAllByText(/signup/i);
    const signupElement = signupElements[0];
    expect(signupElement).toBeInTheDocument();
  });

  test("render login heading", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthForm />
        </BrowserRouter>
      </Provider>
    );

    const loginElements = screen.getAllByText(/login/i);
    const loginElement = loginElements[0];
    expect(loginElement).toBeInTheDocument();
  });
  test("render email label", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthForm />
        </BrowserRouter>
      </Provider>
    );

    const emailLabelElement = screen.getByText("Email:")
    // const emailLabelElement = screen.getByText("Email", { exact: false }); // 2 lines are correct
    expect(emailLabelElement).toBeInTheDocument();
  });

  test("render password label", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthForm />
        </BrowserRouter>
      </Provider>
    );

    const passwordLabelElement = screen.getByText("Password:");
    expect(passwordLabelElement).toBeInTheDocument();
  });

  // test("render confirm password label", () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <AuthForm />
  //       </BrowserRouter>
  //     </Provider>
  //   );

  //   const confirmPasswordLabelElement = screen.getByText("Confirm Password:");
  //   expect(confirmPasswordLabelElement).toBeInTheDocument();
  // });

  // test("render signup button", () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <AuthForm />
  //       </BrowserRouter>
  //     </Provider>
  //   );

  //   // const buttonElements = screen.getAllByText(/signup/i);
  //   // const buttonElement = buttonElements[1]
  //   // // Trigger a click event on the button
  //   // userEvent.click(buttonElement);

  //   const buttonElements = screen.getAllByRole("button")
  //   const buttonElement = buttonElements[0]
  //   userEvent.click(buttonElement)

  //   const signupButtonElements = screen.getAllByText(/signup/i)
  //   const signUpButtonElement = signupButtonElements[1]
  //   expect(signUpButtonElement).toBeInTheDocument()
  // })
  
});
