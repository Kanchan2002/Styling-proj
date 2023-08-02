import React, { useState } from 'react';

import Button from '../UI/Button';
import './Courseinput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid,setisvalid] = useState(true);
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setisvalid(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length == 0){
      setisvalid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button validvalue={isvalid} type="submit">
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;