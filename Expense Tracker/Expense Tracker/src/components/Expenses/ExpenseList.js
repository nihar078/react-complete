import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseContext from "../../store/ExpenseContext";
import { Modal } from "react-bootstrap";

const ExpenseList = () => {
  const expenseCtx = useContext(ExpenseContext);
    // const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditData(null);
  };

  const removeHandler = (id) => {
    expenseCtx.removeExpense(id);
  };
  const editHandler = (id) => {
    const expenseToEdit = expenseCtx.expenses.find(
      (expense) => expense.id === id
    );
    setEditData(expenseToEdit);
    // setEditMode(true);
    setShowEditModal(true);
  };

  console.log(expenseCtx.expenses);

  return (
    <div >
      <ul style={{ textAlign: "center" }}>
        {expenseCtx.expenses.map((expense) => (
          <ExpenseItem
          editMode={false}
            key={expense.id}
            category={expense.category}
            amount={expense.amount}
            description={expense.description}
            onRemove={() => removeHandler(expense.id)}
            onEdit={() => editHandler(expense.id)}
          />
        ))}
      </ul>

      <Modal show={showEditModal} onHide={handleCloseEditModal} style={{textAlign: "center"}}>
        <Modal.Header closeButton>
          <Modal.Title >Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExpenseForm
            editMode={true}
            onClose={handleCloseEditModal}
            editData={editData}
            addEditExpenseData={(expenseData) => {
              // Update the existing expense on the backend
              expenseCtx.editExpense(editData.id, expenseData);
              setShowEditModal(false);
              setEditData(null);
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ExpenseList;
