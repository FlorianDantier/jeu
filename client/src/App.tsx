import React from 'react';
import  io  from "socket.io-client";

const socket = io("http://localhost:8080");
function App() {
  return (
    <h1>Hello world !</h1> 
  );
}

export default App;
