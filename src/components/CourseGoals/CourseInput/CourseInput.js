import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
import Modal from '../../UI/Modal/Modal';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isEmpty,setIsEmpty]=useState(false);
  const [isVisible,setIsVisible]=useState(false);

  const goalInputChangeHandler = event => {
    if(isEmpty==true && event.target.value.length>0)
      setIsEmpty(false);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.length==0)
    {
      setIsEmpty(true);
      setIsVisible(true);
    }
    else
      {
        props.onAddGoal(enteredValue);
        setEnteredValue('');
      }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${isEmpty && styles.invalid }`}>
        <label>Course Goal</label>
        <input type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
         />
         {
         isVisible && 
         <Modal title="Error Occured" message="Don't Enter empty Goals" visible={setIsVisible}></Modal>
        }
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
