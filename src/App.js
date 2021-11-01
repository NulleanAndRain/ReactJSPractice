import { Header } from './components/Header/Header';
import './App.css';
import { TableContainer } from './components/Table/TableContainer';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header text='header'/>
        <TableContainer text='table'></TableContainer>
      </div>
    </div>
  );
}

export default App;
