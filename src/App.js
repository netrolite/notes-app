import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid"
import "./index.css"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"

export default function App() {  
  return (
    <main className="main dark">
      <Sidebar />
      <Editor />
    </main>
  );
}