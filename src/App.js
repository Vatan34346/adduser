
import React,{useState} from 'react'
import AddUser from "./componentes/Users/AddUser";
import UserList from "./componentes/Users/UserList";

function App() {
  const[userList,setUsersList]=useState([]);

  const addUserHandler=(uName,uAge)=>{
    setUsersList(prevState=>{
      return [...prevState,{name:uName,age:uAge,id:Math.random().toString()}];
    })
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList useres={userList} />
    </React.Fragment>
  );
}

export default App;
