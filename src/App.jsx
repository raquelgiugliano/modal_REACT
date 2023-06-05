import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [openModal, setOpenModal]=useState(false);

  return (
    <div>
      <button className="btn-modal" onClick={()=>setOpenModal(true)}>Abrir Modal</button>
      <Modal open={openModal} onClose={()=>setOpenModal(false)}/>
    </div>
  );
}

export default App;
