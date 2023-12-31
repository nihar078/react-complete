import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";
import Profile from "./Profile";

// Mock the fetch function globally
window.fetch = jest.fn();
// Mock Redux store
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
  }));


describe("Profile component", () => {
  beforeEach(() => {
    fetch.mockClear();
    useSelector.mockClear()
  });

  test("renders Profile component", () => {
    useSelector.mockReturnValue({
        auth: {
          isLoggedIn: true,
          token: "id"
        },
      });
    render(
        <Profile />
    );
    // Add assertions based on your component
    // For example, check if the component renders specific elements.
    expect(screen.getByText("Contact Details")).toBeInTheDocument();
    // expect(screen.getByLabelText("Full Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Profile Photo URL")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Update")).toBeInTheDocument();
  });

//   test("updates state on Full Name input change", () => {
//     render(
//       <Provider store={store}>
//         <Profile />
//       </Provider>
//     );

//     const nameInput = screen.getByLabelText("Full Name:");
//     fireEvent.change(nameInput, { target: { value: "John Doe" } });

//     // Assert that the state has been updated
//     expect(nameInput.value).toBe("John Doe");
//   });

//   test("updates state on Profile Photo URL input change", () => {
//     render(
//       <Provider store={store}>
//         <Profile />
//       </Provider>
//     );

//     const photoUrlInput = screen.getByLabelText("Profile Photo URL");
//     fireEvent.change(photoUrlInput, { target: { value: "http://example.com" } });

//     // Assert that the state has been updated
//     expect(photoUrlInput.value).toBe("http://example.com");
//   });

//   test("submits form with updated values", async () => {
//     render(
//       <Provider store={store}>
//         <Profile />
//       </Provider>
//     );

//     const nameInput = screen.getByLabelText("Full Name:");
//     const photoUrlInput = screen.getByLabelText("Profile Photo URL");
//     const updateButton = screen.getByText("Update");

//     fireEvent.change(nameInput, { target: { value: "John Doe" } });
//     fireEvent.change(photoUrlInput, { target: { value: "http://example.com" } });

//     // Mock the fetch function to simulate a successful request
//     fetch.mockResolvedValueOnce({
//       ok: true,
//       json: async () => ({}),
//     });

//     // Trigger form submission
//     userEvent.click(updateButton);

//     // Wait for the asynchronous operations to complete
//     await waitFor(() => {
//       // Assert that the fetch function was called with the correct parameters
//       expect(fetch).toHaveBeenCalledWith(
//         "https://identitytoolkit.googleapis.com/v1/accounts:update?key=",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             idToken: "your_mocked_token",
//             displayName: "John Doe",
//             photoUrl: "http://example.com",
//             returnSecureToken: true,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//     });

//     // Add more assertions based on your expected behavior
//     // For example, check if the success message is displayed.
//     expect(screen.getByText("Successfully updated")).toBeInTheDocument();
//   });



});
