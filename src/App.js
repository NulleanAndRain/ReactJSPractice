import { Header } from './components/Header/Header';
import './App.css';
import { TableContainer } from './components/Table/TableContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import data from './data/items.json'

function App() {
  const reducer = (state, action) => {
    return state;
  };

  const store = createStore(reducer, {
    allItems: [...data],
    currentList: [...data]
  });

  return (
    <Provider store = {store} >
      <div className="App">
        <div className="App-content">
          <Header text='header'/>
          <TableContainer></TableContainer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
