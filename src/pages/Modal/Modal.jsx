import {useState} from "react"
import Modal from "../../components/Modal"
import './style.scss'

const ModalPage = () => {
  const [open, setOpen] = useState(false)
  const handleButtonClick = () => {
    setOpen(!open);
  };
  
  return (
    <div className="modal-content">
      <button className="open-modal-btn" onClick={handleButtonClick}>✨ Открыть окно</button>
      <Modal open={open} handleOpen={handleButtonClick}/>
    </div>
  )
}

export default ModalPage