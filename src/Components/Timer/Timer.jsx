import React from 'react';
import ReactDOM, { render } from 'react-dom';



function Timer (props) {
    return (

        <>
      <div className='localTime'>
        <h1>Местное время:</h1>
        <h2 className="timerH2">{props.date.toLocaleTimeString()}</h2>
      </div>
      </>
    );
  }
  
  const tick= () =>  {
    ReactDOM.render(
      <Timer date={new Date()} />,
      document.getElementById('rootTime')
    );
  }
  
  setInterval(tick, 1000);
  

  export default Timer;
