import { render, screen, fireEvent } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm";

describe("Exepense form component", () => {
  test("render expense form heading", () => {
    render(<ExpenseForm />);

    const headingElement = screen.getByText("Expense");
    expect(headingElement).toBeInTheDocument();
  });

  test("render amount label", () => {
    render(<ExpenseForm />)

    const amountInput = screen.getByLabelText("Amount:");
    expect(amountInput).toBeInTheDocument()
  })

  test("render description label", () => {
    render(<ExpenseForm />)

    const descriptionInput = screen.getByLabelText("Description:");
    expect(descriptionInput).toBeInTheDocument()
  })

  test("renders a submit button", () => {
    render(<ExpenseForm />);
    const submitButton = screen.getByRole("button", { name: "Add Expense" });
    expect(submitButton).toBeInTheDocument();
  });

  test("renders a cancel button", () => {
    render(<ExpenseForm />);
    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    expect(cancelButton).toBeInTheDocument();
  });

  test("renders a close button in edit mode", () => {
    render(<ExpenseForm editMode />);
    const closeButton = screen.getByRole("button", { name: "Close" });
    expect(closeButton).toBeInTheDocument();
  });

  test("renders a save changes button in edit mode", () => {
    render(<ExpenseForm editMode />);
    const saveChangesButton = screen.getByRole("button", { name: "Save Changes" });
    expect(saveChangesButton).toBeInTheDocument();
  });


  test("form fields are initially empty", () => {
    render(<ExpenseForm />);
    const descriptionInput = screen.getByLabelText("Description:");
    const categoryInput = screen.getByLabelText("Category:");

    expect(descriptionInput).toHaveValue("");
    expect(categoryInput).toHaveValue("");
  });

  test("form fields are updated when user types", () => {
    render(<ExpenseForm />);
    const amountInput = screen.getByLabelText("Amount:");
    const descriptionInput = screen.getByLabelText("Description:");
    const categoryInput = screen.getByLabelText("Category:");

    fireEvent.change(amountInput, { target: { value: "50" } });
    fireEvent.change(descriptionInput, { target: { value: "Dinner" } });
    fireEvent.change(categoryInput, { target: { value: "Food" } });

    expect(amountInput.value).toBe("50");
    expect(descriptionInput.value).toBe("Dinner");
    expect(categoryInput.value).toBe("Food");
  });


  test("calls submit handler on button click", () => {
    const mockSubmitHandler = jest.fn();
    render(<ExpenseForm addExpenseData={mockSubmitHandler} />);
    const submitButton = screen.getByRole("button", { name: "Add Expense" });
    fireEvent.click(submitButton);
    expect(mockSubmitHandler).toHaveBeenCalled();
  });

});
