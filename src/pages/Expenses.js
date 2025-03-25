import React, { useState, useEffect } from "react";
import "./expenses.css";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const categories = [
    "Food & Drinks", "Shopping", "Outing", "Transport", "Events", "Entertainment",
    "Travel", "Medical", "Fitness", "Bills", "Personal", "Investment", "Others"
  ];

  

  const handleAddIncome = async () => {
    if (!income || parseFloat(income) <= 0) {
      alert("Please enter a valid income.");
      return;
    }

    setIncome("");

    await fetch("http://localhost:5000/user/income",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        body: JSON.stringify({income}),
        credentials: 'include', // Include credentials (cookies)

        }
    })

  };

  const handleAddExpense = async() => {
    if (!category || !amount || parseFloat(amount) <= 0) {
      alert("Please select a category and enter a valid amount.");
      return;
    }

    const newExpense = { id: Date.now(), category, amount: parseFloat(amount) };
    const updatedExpenses = [...expenses, newExpense];

    setExpenses(updatedExpenses);

    await fetch("http://localhost:5000/user/expenses",{
      method: "POST",
      headers:{
          "Content-Type": "application/json",
      body: JSON.stringify({amount}),
      credentials: 'include', // Include credentials (cookies)

      }
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })

    setCategory("");
    setAmount("");
  };

 

  return (
    <div className="expenses-container">
      <h2 className="title">Track Your Expenses</h2>

      {/* Income Input */}
      <div className="income-input">
        <label>Add Income: </label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter your income"
        />
        <button className="income-btn" onClick={handleAddIncome}>Add Income</button>
      </div>

      {/* Expense Entry */}
      <div className="expense-entry">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
        />

        <button className="expense-btn" onSubmit={handleAddExpense}>Add Expense</button>
      </div>

      {/* Spending Summary */}
      <div className="spending-summary">
        <h3>Spending Summary</h3>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <div key={expense.id} className="expense-item">
              <span>{expense.category}</span>
              <span>₹{expense.amount}</span>
            </div>
          ))
        ) : (
          <p>No expenses recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Expenses;