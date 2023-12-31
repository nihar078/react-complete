import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
// import ExpenseContext from "../../store/ExpenseContext";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../../store/expensesl";

const ExpenseList = () => {
  // const expenseCtx = useContext(ExpenseContext);
  const expenseRdx = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  const authRdx = useSelector((state) => state.auth);
  const userEmail = authRdx && authRdx.email ? authRdx.email.replace(/[@.]/g, "") : "";

  // const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch(
          `https://react-expense-tracker-ed111-default-rtdb.firebaseio.com/user${userEmail}.json`
        );
        if (response.ok) {
          const data = await response.json();
          // console.log(data);

          const expenseData = [];
          for (const key in data) {
            expenseData.push({
              id: key,
              ...data[key],
            });
          }
          // console.log(expenseData);
          dispatch(expenseActions.setExpense(expenseData));
        } else {
          console.error("Error fetching Data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (authRdx.isLoggedIn) {
      fetchExpenses();
    }
  }, [authRdx.isLoggedIn, userEmail, dispatch]);
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditData(null);
  };

  const removeHandler = async (id) => {
    // expenseCtx.removeExpense(id);
    // dispatch(expenseActions.removeExpense(id));
    // const removeExpenseHandler = async(id) =>{
    const response = await fetch(
      `https://react-expense-tracker-ed111-default-rtdb.firebaseio.com/user${userEmail}/${id}.json`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(expenseActions.removeExpense(id));
      // setExpenses((prevExpenses) =>
      //   prevExpenses.filter((expense) => expense.id !== id)
      // );
      console.log("Expense Delete Succesfully from the server");
    } else {
      console.error("something went wrong in delete");
    }
    // }
  };
  const editHandler = (id) => {
    const expenseToEdit = expenseRdx.expenses.find(
      (expense) => expense.id === id
    );
    setEditData(expenseToEdit);
    // setEditMode(true);
    setShowEditModal(true);
  };
  const editExpenseHandler = async (id, updatedExpense) => {
    try {
      const response = await fetch(
        `https://react-expense-tracker-ed111-default-rtdb.firebaseio.com/user${userEmail}/${id}.json`,
        {
          method: "PUT", // Use PUT/PATCH method for updating existing data
          body: JSON.stringify(updatedExpense),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("Expense updated successfully on the server");
        console.log("Updated Expense Data:", updatedExpense);
        console.log("Updated id:", id);
        // dispatch(expenseActions.editExpense(editData.id, expenseData));
        dispatch(expenseActions.editExpense({id, updatedExpense}));
        setShowEditModal(false);
        setEditData(null);
      //   setExpenses((prevExpenses) =>
      //   prevExpenses.map((expense) => (expense.id === id ? { ...expense, ...updatedExpense } : expense))
      // );
      } else {
        console.error("Error updating expense on the server");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(expenseRdx.expenses);

  return (
    <div>
      <ul style={{ textAlign: "center" }}>
        {expenseRdx.expenses.map((expense) => (
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

      <Modal
        show={showEditModal}
        onHide={handleCloseEditModal}
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExpenseForm
            editMode={true}
            onClose={handleCloseEditModal}
            editData={editData}
            addEditExpenseData={(updatedExpense) => {
              editExpenseHandler(editData.id, updatedExpense)
              // Update the existing expense on the backend
              // expenseCtx.editExpense(editData.id, expenseData);
              // dispatch(expenseActions.editExpense(id, updatedExpense));
              // setShowEditModal(false);
              // setEditData(null);
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ExpenseList;
