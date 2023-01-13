import { useState } from 'react';
import React from 'react';
import "./App.css";

function App() {

  const [Client, setClient] = useState([]);

  const ApiFetch = async () => {
    const ReciveData = await fetch('https://reqres.in/api/users?page=1');
    const JsonData = await ReciveData.json();
    setClient(JsonData.data);
    document.getElementById('Click-Button').style.display="none";
    document.getElementById('Task').style.display="none";
    document.getElementById('img').style.display="none";
  }
  return (
    <>
      <center>
        <header className='header'>

          <div id="Client">
            <div>
            <img id='img' src={require('./Image/Logo.jpg')} alt="logo"/>
            <h1 id='Task'>Please Click On This Button And Get Users Data</h1>
            <button type="button" id="Click-Button" onClick={ApiFetch}>Get User Details</button>
            </div>
            {Client.map((Item, index) => {
              return (
                <div className='Data Display' key={index}>

                  <img src={Item.avatar} className="Images" alt="Images"></img>

                  <div className='item-data'>
                    <h2 className='name'>
                      {Item.first_name} 
                      {Item.last_name}
                    </h2>
                    <h3 className="email">Email:{Item.email}</h3>
                  </div>

                </div>
              );
            })}
          </div>
        </header>
      </center>
    </>
  );
}
export default App;





