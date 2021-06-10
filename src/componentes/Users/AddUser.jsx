  
import React, { useState,useRef } from 'react';
import ErrorModal from '../Ui/ErrorModal'
import Card from '../Ui/Card';
import Button from '../Ui/Button';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper'


const AddUser = (props) => {

const nameInputRef=useRef();
const myAgeInputRef=useRef();


  const [error,setError]=useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredUAge=myAgeInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUAge.trim().length === 0) {
      setError({title:'Invalid input', message:'please enter valid name and age (not emty)'});
      return;
    }
    if (+enteredUAge < 1) {
      setError({title:'Invalid Age', message:'please enter valid age > 0.'});
      return;
    }
    props.onAddUser(enteredName, enteredUAge);
    nameInputRef.current.value='';
    myAgeInputRef.current.value='';
  };




  const errorHandler =()=>{
    setError(null);
  }
  return (
    <Wrapper>
     {error&& <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          ref={myAgeInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;