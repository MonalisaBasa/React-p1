import React, {useState} from 'react'

import Card from '../UI/Card';

import classes from './Adduser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import wrapper from '../Helpers/Wrapper';

const Adduser =(props) =>{

  const[EnteredUsername,SetEnteredUsername] = useState('')
  const[EnteredAge,SetEnteredAge] = useState('');
  const[error, setError]=useState();

    const adduserHandler =(event)=>{
        event.preventDefault()
        if(EnteredUsername.trim().length === 0 || EnteredAge.trim().length === 0){
          setError({
            title:'Invalid input',
            message:'please enter a valid name and age(non-empty values)'
          })
          return;
        }
        // It takes EnteredAge as string but it should be number for that we add + in prior to EnteredAge.
        if(+EnteredAge < 1){
          setError({
            title:'Invalid age',
            message:'please enter a valid age (> 0)'
          })
          
          return;
        }
        // console.log(EnteredUsername,EnteredAge)
        props.onAdduser(EnteredUsername,EnteredAge);
        SetEnteredUsername('');
        SetEnteredAge('');
    }

    const changeUserHandler = (event) =>{
      SetEnteredUsername(event.target.value);
    }

    const AgeHandler = (event) =>{
      SetEnteredAge(event.target.value);
    }

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
      <input type="text" id="username" value={EnteredUsername} onChange={changeUserHandler}/>
      <label htmlFor="age">Age</label>
      <input type="number" id="age" value={EnteredAge} onChange={AgeHandler}/>
      <Button type="submit">Add User</Button>
    </div>
    </form>
    </Card>
    </wrapper>
  )
}
export default Adduser;

