import { Header } from './components/Header/Header';
import './App.css';
import { TableContainer } from './components/Table/TableContainer';
import { useState } from 'react';

import data from './data/items.json'

function App() {
  const [tableItems, updateItems] = useState([...data]);

  return (
    <div className="App">
      <div className="App-content">
        <Header text='header'/>
        <TableContainer itemsList={tableItems}></TableContainer>
      </div>
    </div>
  );
}

export default App;
