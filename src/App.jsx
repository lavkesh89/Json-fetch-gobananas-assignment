// import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserData from "./components/UserData";

const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  
  const [users, setUsers ] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if(data.length > 0){
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <div>
      <UserData users={users}/> 
    </div>
  );

};

export default App;
