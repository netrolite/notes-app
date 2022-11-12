import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid"
import "./index.css"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"

export default function App() {  
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  )
  const [currNote, setCurrNote] = useState(
    // if notes[0] exists, set it to notes[0]
    notes[0] || ""
  )
  const [darkMode, setDarkMode] = useState(
    // get current darkMode value from localStorage
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  // save current darkMode to localStorage
  JSON.stringify(localStorage.setItem("darkMode", darkMode));

  return (
    <main className={"main" + (darkMode ? " dark" : "")}>
      <Sidebar
        notes={notes}
        setNotes={setNotes}
        currNote={currNote}
        setCurrNote={setCurrNote}
      />
      <Editor 
        currNote={currNote}
        setCurrNote={setCurrNote}
        notes={notes}
        setNotes={setNotes}
        setDarkMode={setDarkMode}
      />
    </main>
  );
}
