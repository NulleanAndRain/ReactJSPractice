import { Header } from './components/Header/Header';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router'
import { createBrowserHistory } from 'history';

import data from './data/items.json'
import { TableFiltered } from './components/Table/TableFiltered';
import { TableUnfiltered } from './components/Table/TableUnfiltered';
import { ModalRoot } from './components/Modals/ModalRoot';
import { createContext, useState } from 'react';


export const ModalsContext = createContext({ root: null, visible: false, setVisible: () => {console.log('ъеъ')}});

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'filter': {
        let filtered = state.allItems.filter(e => e.name.toLowerCase().includes(action.value.toLowerCase()))
        let newState = {
          ...state,
          currentList: filtered
        }
        return newState;
      }

      case 'restore_filter': {
        let newState = {
          ...state,
          currentList: state.allItems
        }
        return newState;
      }

      case 'order_by': {
        let dir = 0;
        let ordered = [...state.allItems];

        if (action.dir === 'asc') {
          dir = 1;
        } else if (action.dir === 'desc'){
          dir = -1;
        }

        if (action.column === 'name') {
          ordered = ordered.sort((a, b) => {
            return dir * a.name.localeCompare(b.name);
          });
        } else if(action.column === 'price'){
          ordered = ordered.sort((a, b) => {
            return (a.price - b.price) * dir;
          });
        }

        let newState = {
          ...state,
          currentList: ordered
        }
        return newState;
      }

      case 'remove_item':{
        let newList = [...state.allItems].remove(action.value);
        let newListCurrent = [...state.currentList].remove(action.value);
        let newState = {
          ...state,
          allItems: newList,
          currentList: newListCurrent
        }
        return newState;
      }

      default:
        return state;
    }
  };

  const data1 = [...data].map((e, id) => {e.id = id; return e});
  const store = createStore(reducer, {
    allItems: [...data1],
    currentList: [...data1]
  });

  const history = createBrowserHistory();
  const [visible, setVisible] = useState(false);

  const [modals, setModals] = useState({});

  return (
    <Provider store = {store} >
      <Router history={history}>
        <ModalsContext.Provider value = { {setModals, visible, setVisible} }> 
          <div className="App">
            <div className="App-content">
              <Header text='header'/>
                <Switch>
                  <Route path='/search/:searchFilter'>
                    <TableFiltered />
                  </Route>
                  <Route path='/'>
                    <TableUnfiltered />
                  </Route>
                </Switch>
            </div>

            <ModalRoot 
              visible = { visible }
              setVisible = { setVisible }
              modals = {modals}
              setModals = { setModals }
            />
          </div>
        </ModalsContext.Provider>
      </Router>
    </Provider>
  );
}

export default App;
