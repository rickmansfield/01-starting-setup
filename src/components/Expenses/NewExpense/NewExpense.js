import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  const saveExpeneseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log('expenseData', expenseData);
    props.onAddExpense(expenseData)
  };
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpeneseDataHandler} stopEditingHandler={stopEditingHandler}/>}
      
    </div>
  )
}

export default NewExpense
