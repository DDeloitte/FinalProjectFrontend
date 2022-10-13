import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {

  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('Updated');
  // };

  return (
    <li>
    <Card className='expense-item'>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>

          <div className='col-md-2'>
            <ExpenseDate date={props.date} />
          </div>

          <div className='col-md-8 '>
            <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            </div>
          </div>

          {/* <div className='col-md-2'>
            <button onClick={clickHandler} className='btn btn-secondary' type='button'>Button</button>
          </div> */}

        </div>
      </div>
      
      
    </Card>
    </li>
  );
}

export default ExpenseItem;