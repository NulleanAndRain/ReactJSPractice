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
    return state;
  };

  const store = createStore(reducer, {
    allItems: [...data],
    currentList: [...data]
  });

  const history = createBrowserHistory();

  return (
    <Provider store = {store} >
      <div className="App">
        <div className="App-content">
          <Header text='header'/>
          <Router history={history}>
            <Switch>
              <Route location='/'>
                <TableDefault />
              </Route>
              <Route location='/search/:searchFilter'>
                <TableFiltered/>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
      {/* <ModalRoot/> */}
    </Provider>
  );
}

export default App;
