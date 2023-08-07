import React, {useState,useRef} from 'react'

import Card from '../UI/Card';

import classes from './Adduser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import wrapper from '../Helpers/Wrapper';

const Adduser =(props) =>{
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  // const[EnteredUsername,SetEnteredUsername] = useState('')
  // const[EnteredAge,SetEnteredAge] = useState('');
  const[error, setError]=useState();

    const adduserHandler =(event)=>{
        event.preventDefault()
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredcollegeName = collegeInputRef.current.value;
        console.log(nameInputRef);
        // if(EnteredUsername.trim().length === 0 || EnteredAge.trim().length === 0){
          if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredcollegeName.trim().length === 0){
          setError({
            title:'Invalid input',
            message:'please enter a valid name and age(non-empty values)'
          })
          return;
        }
        // It takes EnteredAge as string but it should be number for that we add + in prior to EnteredAge.
        if(+enteredUserAge < 1){
          setError({
            title:'Invalid age',
            message:'please enter a valid age (> 0)'
          })
          
          return;
        }
        // console.log(EnteredUsername,EnteredAge)
        props.onAdduser(enteredName,enteredUserAge,enteredcollegeName);
        // SetEnteredUsername('');
        // SetEnteredAge('');
        nameInputRef.current.value ='';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = '';
    }

    // const changeUserHandler = (event) =>{
    //   SetEnteredUsername(event.target.value);
    // }

    // const AgeHandler = (event) =>{
    //   SetEnteredAge(event.target.value);
    // }

    const errorHandler = () =>{
      setError(null);
    }
  return (
    <wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={adduserHandler}>
    <div>
      <label htmlFor="username">Username</label>
      <input 
      type="text" 
      id="username" 
      // value={EnteredUsername} 
      // onChange={changeUserHandler}
      ref={nameInputRef}
      />
      <label htmlFor="age">Age</label>
      <input 
      type="number" 
      id="age" 
      // value={EnteredAge} 
      // onChange={AgeHandler}
      ref={ageInputRef}
      />
      <label htmlFor="college">College Name</label>
      <input 
      type="text"
      id="collegename"
      ref={collegeInputRef}
      />
      <Button type="submit">Add User</Button>
    </div>
    </form>
    </Card>
    </wrapper>
  )
}
export default Adduser;

