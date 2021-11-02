import { Header } from './components/Header/Header';
import './App.css';
import { TableDefault } from './components/Table/TableDefault';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router'
import { createBrowserHistory } from 'history';

import data from './data/items.json'
import { TableFiltered } from './components/Table/TableFiltered';
// import { ModalRoot } from './components/Modals/ModalRoot';

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'filter':
          let filtered = state.allItems.filter(e => e.name.toLowerCase().includes(action.value.toLowerCase()))
          let newState = {
            ...state,
            currentList: filtered
          }
          return newState;
    
      default:
        return state;
    }
  };

  const store = createStore(reducer, {
    allItems: [...data],
    currentList: [...data]
  });

  const history = createBrowserHistory();

  return (
    <Provider store = {store} >
      <Router history={history}>
        <div className="App">
          <div className="App-content">
            <Header text='header'/>
              <Switch>
                <Route path='/search/:searchFilter'>
                  <TableFiltered />
                </Route>
                <Route path='/'>
                  <TableDefault />
                </Route>
              </Switch>
          </div>
        </div>
        {/* <ModalRoot/> */}
      </Router>
    </Provider>
  );
}

export default App;
