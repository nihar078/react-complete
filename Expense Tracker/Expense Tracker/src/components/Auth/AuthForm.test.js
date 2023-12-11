import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthForm from './AuthForm';

describe('AuthForm Component', () => {
  test('renders login form by default', () => {
    render(<AuthForm />);
    const loginHeader = screen.getByText("Login");
    expect(loginHeader).toBeInTheDocument();
  });

//   test('renders signup form when switching to signup mode', () => {
//     render(<AuthForm />);
//     const signupButton = screen.getByText(/have an account?signup/i);
//     fireEvent.click(signupButton);
//     const signupHeader = screen.getByText(/signup/i);
//     expect(signupHeader).toBeInTheDocument();
//   });

//   test('submits login form with valid data', async () => {
//     render(<AuthForm />);
//     const emailInput = screen.getByLabelText(/email/i);
//     const passwordInput = screen.getByLabelText(/password/i);
//     const submitButton = screen.getByRole('button', { name: /login/i });

//     userEvent.type(emailInput, 'test@example.com');
//     userEvent.type(passwordInput, 'password123');
//     fireEvent.click(submitButton);

//     // You might need to await some asynchronous actions, for example, if form submission involves an API call
//     await waitFor(() => {
//       // Add assertions based on the expected behavior after form submission
//       // For example, check if the login logic is called or if the form is cleared
//     });
//   });

//   test('displays alert when confirm password does not match', async () => {
//     render(<AuthForm />);
//     const signupButton = screen.getByText(/have an account?signup/i);
//     fireEvent.click(signupButton);

//     const passwordInput = screen.getByLabelText(/password/i);
//     const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
//     const submitButton = screen.getByRole('button', { name: /signup/i });

//     userEvent.type(passwordInput, 'password123');
//     userEvent.type(confirmPasswordInput, 'password456');
//     fireEvent.click(submitButton);

//     const alert = await screen.findByText(/confirm password doesn't match/i);
//     expect(alert).toBeInTheDocument();
//   });

//   // Add more test cases for different scenarios

//   // Example test for switching between login and signup modes
//   test('switches between login and signup modes', () => {
//     render(<AuthForm />);
//     const signupButton = screen.getByText(/have an account?signup/i);
//     fireEvent.click(signupButton);

//     const signupHeader = screen.getByText(/signup/i);
//     expect(signupHeader).toBeInTheDocument();

//     const loginButton = screen.getByText(/have an account?login/i);
//     fireEvent.click(loginButton);

//     const loginHeader = screen.getByText(/login/i);
//     expect(loginHeader).toBeInTheDocument();
//   });
});

