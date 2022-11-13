import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid"
import "./index.css"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"

export default function App() {  
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  )

  const [currNoteID, setCurrNoteID] = useState(
    // if notes[0] exists, set to notes[0]. Otherwise, set an empty string
    // only runs on initial page load (or reload)!
    notes[0] && notes[0].id || ""
  )

  const [darkMode, setDarkMode] = useState(
    // get current darkMode value from localStorage
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const currNote = notes.find(item => item.id === currNoteID);
  console.log(currNote);

  return (
    <main className={"main" + (darkMode ? " dark" : "")}>
      <Sidebar
        notes={notes}
        setNotes={setNotes}
        currNoteID={currNoteID}
        setCurrNoteID={setCurrNoteID}
      />
      <Editor 
        currNoteID={currNoteID}
        setCurrNoteID={setCurrNoteID}
        notes={notes}
        setNotes={setNotes}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </main>
  );
}
