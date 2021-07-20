import React from "react";
import io from "socket.io-client";
import CardPackage from "./components/CardPackage";

const socket = io("http://localhost:8080");
function App() {
  return <CardPackage />;
}

export default App;
