import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid"
import "./index.css"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"

export default function App() {  
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  )
  
  const [darkMode, setDarkMode] = useState(
      localStorage.getItem("darkMode") || false
  );

  return (
    <main className={"main" + (darkMode ? " dark" : "")}>
      <Sidebar
        notes={notes}
      />
      <Editor 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </main>
  );
}