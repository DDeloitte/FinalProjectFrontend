import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: ''
	// });

	// Definition of states
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput((prevState) => {
		// 	return {...prevState, enteredTitle: event.target.value};
		// });
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput((prevState) => {
		// 	return {...prevState, enteredAmount: event.target.value};
		// });
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput((prevState) => {
		// 	return {...prevState, enteredDate: event.target.value};
		// });
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value
		// });
	};
	const submitHandler = (event) => {
		event.preventDefault();

		// assigns input to the values
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		};

		// Prints the data from input
		// console.log(expenseData);

		//Exports the input data 
		props.onSaveExpenseData(expenseData);

		// Sets the default values, deletes previous input
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return(
		<div className="container">
				
			<div className="row justify-content-center">

				<div className="col-md-8">
					<div className="card shadow-lg mt-5">
						<div className="card-header text-bg-dark">Add New Expense</div>
						<div className="card-body">

							<form onSubmit={submitHandler} className="row g-3 align-items-center justify-content-center">

								{/* Name of expense input */}
								<div className="col-md-6">
									<label htmlFor="Title" className="visually-hidden">Expense Name</label>
									<div className="input-group input-group-sm">
											<input 
												onChange={titleChangeHandler} 
												type="text" 
												className="form-control" 
												id="Title" 
												placeholder="Expense Name" 
												autoFocus 
												required
												value={enteredTitle}></input>
									</div>
								</div>

								{/* Amount of expense */}
								<div className="col-md-6">
									<label htmlFor="number" className="visually-hidden">Amount</label>
									<div className="input-group input-group-sm">
											<input 
												onChange={amountChangeHandler} 
												type="number" 
												className="form-control" 
												min="0.01" step="0.01" 
												id="number" 
												placeholder="Amount" 
												autoFocus 
												required
												value={enteredAmount}></input>
											<span className="input-group-text">USD$</span>
									</div>
								</div>

								{/* Date of expense */}
								<div className="col -md-6">
									<label htmlFor="date">Date</label>
									<div className="input-group input-group-sm">
									<input 
										onChange={dateChangeHandler} 
										type="date" 
										className="form-control" 
										min="2019-01-01" max="2022-12-31" 
										id="date" 
										autoFocus 
										required
										value={enteredDate}></input>
									</div>
								</div>

								<div className="col-md-6">
									<button type="submit" className="btn btn-success">Add Expense</button>
								</div>

							</form>

						</div>
					</div>
				</div>

			</div>

		</div>

	);

};

export default ExpenseForm;