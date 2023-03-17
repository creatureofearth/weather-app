import style from './style.css';
import {useState} from 'preact/hooks';

const Clock  = () => {
  let currentTime = new Date().toLocaleTimeString();
  const[updatedTime,setUpdatedTime ]=useState(currentTime);

  const Time = () =>{
    let currentTime = new Date().toLocaleTimeString();
    setUpdatedTime(currentTime)
  }
  
  setInterval(Time, 1000);

   
  return( <div class= {style.clock}>
   {updatedTime}
  </div>
  );

};
export default Clock;