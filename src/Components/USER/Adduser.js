import React, {useState} from 'react'

import Card from '../UI/Card';

import classes from './Adduser.module.css';
import Button from '../UI/Button';

const Adduser =(props) =>{

  const[EnteredUsername,SetEnteredUsername] = useState('')
  const[EnteredAge,SetEnteredAge] = useState('');

    const adduserHandler =(event)=>{
        event.preventDefault()
        if(EnteredUsername.trim().length === 0 || EnteredAge.trim().length === 0){
          return;
        }
        if(+EnteredAge < 1){
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
  return (
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
  )
}
export default Adduser;

