import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid"
import "./index.css"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"

export default function App() {  
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  )

  const [currNoteID, setcurrNoteID] = useState(
    // if notes[0] exists, set it to notes[0]
    notes[0].id || ""
  )
  console.log(currNoteID);

  const [darkMode, setDarkMode] = useState(
    // get current darkMode value from localStorage
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  return (
    <main className={"main" + (darkMode ? " dark" : "")}>
      <Sidebar
        notes={notes}
        setNotes={setNotes}
        currNoteID={currNoteID}
        setcurrNoteID={setcurrNoteID}
      />
      <Editor 
        currNoteID={currNoteID}
        setcurrNoteID={setcurrNoteID}
        notes={notes}
        setNotes={setNotes}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </main>
  );
}
