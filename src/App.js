import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid"
import "./index.css"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"

export default function App() {  
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  )
  const [currSelectedNoteID, setCurrSelectedNoteID] = useState(
    (notes[0] && notes[0].id) || ""
  )
  const [darkMode, setDarkMode] = useState(
      localStorage.getItem("darkMode") || false
  );

  console.log(notes);
  console.log(currSelectedNoteID);

  return (
    <main className={"main" + (darkMode ? " dark" : "")}>
      <Sidebar
        notes={notes}
        currSelectedNoteID={currSelectedNoteID}
        setCurrSelectedNoteID={setCurrSelectedNoteID}
      />
      <Editor 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </main>
  );
}