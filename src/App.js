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
import { createContext, useCallback, useState } from 'react';


export const ModalsContext = createContext({ 
  visible: false, 
  setVisible: () => {console.log('ъеъ')}, 
  modals: [],
  setModals: () => {console.log('ъyъ')}, 
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'restore_filter': {
      let newState = {
        ...state,
        currentList: state.allItems
      }
      return newState;
    }

    case 'order_by': {
      let newState = {
        ...state,
        dir: action.dir,
        column: action.column
      }
      return newState;
    }

    case 'remove_item':{
      let newList = [...state.allItems];
      newList.splice(newList.indexOf(action.value), 1);

      console.log('new list: ', newList);

      let newState = {
        ...state,
        allItems: newList,
      }
      console.log('state: ', newState);
      return newState;
    }

    case 'update_item':{
      const newList = [...state.allItems];
      const index = newList.indexOf(action.oldItem);
      newList[index] = action.newItem;

      console.log(index);

      let newState = {
        ...state,
        allItems: newList,
      }
      return newState;
    }

    default:
      return state;
  }
};

const data1 = [...data].map((e, id) => {e.id = id; return e});
const store = createStore(reducer, {
  allItems: [...data1]
});


function App() {

  const history = createBrowserHistory();
  const [visible, setVisible] = useState(false);

  const [modals, setModals] = useState([]);

  const closeModals = useCallback(() => {
    if (modals.length > 0)
      setModals(state => [...state].pop());
    if (modals.length <= 1) {
      setVisible(false);
      setModals([]);
    }
  }, [modals, setModals, setVisible]);


  return (
    <Provider store = {store} >
      <Router history={history}>
        <ModalsContext.Provider value = { {visible, setVisible, modals, setModals, closeModals} }> 
          <div className="App">
            <div className="App-content">
              <Header text='header'/>
              <Switch>
                <Route path='/search/:searchFilter'>
                  <TableFiltered />
                </Route>
                <Route exact path='/'>
                  <TableUnfiltered />
                </Route>
              </Switch>
            </div>

            <ModalRoot />
          </div>
        </ModalsContext.Provider>
      </Router>
    </Provider>
  );
}

export default App;
