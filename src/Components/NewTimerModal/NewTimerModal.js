import React, {useState, useEffect} from 'react'
import "./styles.css";

// import { uuid as v4} from 'uuidv4';
import { v4 as uuidv4 } from "uuid"

// MUI COMPONENTS
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from '@material-ui/core/TextField'

const NewTimerModal = ({ addNewTimer, timers }) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('')
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [btnStyles, setBtnStyles] = useState({})
  
  // OPENS & CLOSES MODAL
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // REINITIALIZE ALL VALUES TO 0
  const resetAllValues = () =>{
    setNewTitle('')
    setHours(0)
    setMinutes(0)
    setSeconds(0)
  }

  // UPDATES WITH USER TITLE PARAM
  const handleNewTitleChange = (e) =>{
    setNewTitle(e.target.value)
  }

  // UPDATES WITH USER TIMER PARAMS
  const handleNewTimerChange = (e) => {
    // LIMITS USER INPUT TO 2 NUMBERS
    if(e.target.value.length > 2){
      e.target.value = e.target.value.substring(1)
    }
    if(e.target.name === 'hours'){
      setHours(e.target.value)
    }else if (e.target.name === 'minutes' && e.target.value <= 60){
      setMinutes(e.target.value)
    }else if (e.target.name === 'seconds' && e.target.value <= 60){
      setSeconds(e.target.value)
    }
  }

  // PUSHES USER FORM DATA UP TO APP
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(newTitle.length === 0){
      alert('Please enter a title')
    }else if(hours <= 0 && minutes <= 0 && seconds <= 0){
      alert('Please enter a valid time')
    }else{
      addNewTimer({id: uuidv4(), title: newTitle, timer:{hours:parseInt(hours, 10), minutes:parseInt(minutes, 10), seconds:parseInt(seconds, 10)}})
      handleClose()
      resetAllValues()
    }
  }

  useEffect(() =>{
    // IF ARRAY IS EMPTY, BTN FULL SCREEN
    if(timers.length < 1){
      setBtnStyles({
        backgroundColor: '#181A18',
        height: '100vh',
        paddingBottom: '15rem',
        fontSize: 'xx-large'
      })
    }else{
      // IF ARRAY CONTAINS VALUES, BTN FIXED TO TOP
      setBtnStyles({
        background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
        height: '8vh',
        paddingBottom: '0',
        fontSize: 'medium'
      })
    }
  }, [timers.length])


  return (
    <div>
      <Button style={btnStyles} id='createsNewTimer' color='primary' fullWidth={true} variant='contained' onClick={handleOpen}>
        <AddIcon/>
        <p>Add More timers</p>
      </Button>
      <Modal open={open} onClose={handleClose} className='modal'>
        <div className='modalContainer'>
          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
            <TextField variant="outlined" label="New Title" value={newTitle} onChange={handleNewTitleChange}/>
            <div className='modalTimeInputs'>
              <TextField type="number" name="hours" label="hours" value={hours.toString().padStart(2, "0")} onChange={handleNewTimerChange}/>:
              <TextField type="number" name="minutes" label="minutes" value={minutes.toString().padStart(2, "0")} onChange={handleNewTimerChange}/>:
              <TextField type="number" name="seconds" label="seconds" value={seconds.toString().padStart(2, "0")} onChange={handleNewTimerChange}/>
            </div>
            <Button type='submit' variant='contained' color='primary'>START</Button>
            <Button onClick={resetAllValues}>Clear</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default NewTimerModal

