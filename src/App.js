import React,{useState} from 'react';
import Adduser from './Components/USER/Adduser';
import UserList from './Components/USER/UserList';



function App() {
  const [userList,setuserList]=useState([]);

  const adduserHandler = (Uname,Uage,Ucollege) =>{
    setuserList((prevUserList)=>{
      return[...prevUserList,{name:Uname, Age:Uage, collegename:Ucollege, id: Math.random().toString() }]
    });
  }
  return (
    <React.Fragment>
      <Adduser onAdduser={adduserHandler}/>
      <UserList users={userList}/>

    </React.Fragment>
  );
}

export default App;
