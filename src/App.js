import React,{useState} from 'react';
import Adduser from './Components/USER/Adduser';
import UserList from './Components/USER/UserList';


function App() {
  const [userList,setuserList]=useState([]);

  const adduserHandler = (Uname,Uage) =>{
    setuserList((prevUserList)=>{
      return[...prevUserList,{name:Uname, Age:Uage, id: Math.random().toString()}]
    });
  }
  return (
    <div>
      <Adduser onAdduser={adduserHandler}/>
      <UserList users={userList}/>

    </div>
  );
}

export default App;
