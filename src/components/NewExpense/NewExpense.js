import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {


    const saveExpenseDataHandler = (enteredExpenseData) => {

			const expenseData = {
				...enteredExpenseData,
				id: Math.random().toString(),
				// id2: self.crypto.randomUUID()
			};
			props.onAddExpense(expenseData);
    };

    return (

        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

    );

};

export default NewExpense;