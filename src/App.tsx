import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicProps from './Components/BasicProps';
import Person from './Components/Person';
import { IPerson } from './Models/IPerson';
import { Status } from './Components/Status';
import { Statuses } from './Components/Status'

interface Props {

}

function App() {
  const personDetail: IPerson = {
    name: 'Daipayan',
    address: [
      {
        plotNo: 'loda',
        landMark: 'lodasss'
      },
      {
        plotNo: 'loda1',
        landMark: 'lodasss1'
      },
      {
        plotNo: 'loda2',
        landMark: 'lodasss2'
      }
    ]
  }
  return (
    <div className="App">
      <BasicProps name='Daipayan' age={10} isLogedin={true} />
      <Person person={personDetail} />
      <Status status={Statuses.Completed} />
    </div>
  );
}

export default App;
