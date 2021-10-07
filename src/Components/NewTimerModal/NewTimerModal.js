import React, {useState, useEffect} from 'react'
import "./styles.css";

import uuid from "uuid";

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
  const [btnTextSize, setBtnTextSize] = useState('')
  
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
    // limits string length to 2
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
      addNewTimer({id: uuid(), title: newTitle, timer:{hours:parseInt(hours), minutes:parseInt(minutes), seconds:parseInt(seconds)}})
      handleClose()
      resetAllValues()
    }
  }

  useEffect(() =>{
    let temp = document.getElementById('createsNewTimer')
    if(timers.length < 1){
      temp.style.height = '100vh'
      temp.style.backgroundColor ='#181A18'
      setBtnTextSize(window.innerHeight / 20)
    }else{
      temp.style.height = '8vh'
      temp.style.background ='linear-gradient(to bottom, #0f2027, #203a43, #2c5364)'
      temp.style.padding = '2rem'
      setBtnTextSize(window.innerHeight / 40)
    }
  }, [timers.length])


  return (
    <div>
      <Button style={{fontSize:btnTextSize}} id='createsNewTimer' color='primary' fullWidth={true} variant='contained' onClick={handleOpen}>
        <AddIcon/>
        <p>Add More timers</p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{display:'flex', justifyContent:'center', marginTop:'8rem'}}
      >
        <div className='modalContainer'>
          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
            <TextField variant="outlined" label="New Title" value={newTitle} onChange={handleNewTitleChange}/>
            <div className='modalTimeFields'>
              <TextField type="number" name="hours" label="hours" value={hours.toString().padStart(2, "0")} onChange={handleNewTimerChange}/>:
              <TextField type="number" name="minutes" label="minutes" value={minutes.toString().padStart(2, "0")} onChange={handleNewTimerChange}/>:
              <TextField type="number" name="seconds" label="seconds" value={seconds.toString().padStart(2, "0")} onChange={handleNewTimerChange}/>
            </div>
            <Button type='submit' variant='contained' color='primary'>START</Button>
          </form>
          <Button onClick={resetAllValues}>Clear</Button>
        </div>
      </Modal>
    </div>
  );
};

export default NewTimerModal