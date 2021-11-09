import { useCallback, useContext, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ModalsContext } from '../../App';
import './Header.css';

function Header (props) {
    const history = useHistory();
    const location = useLocation();
    const modalsContext = useContext(ModalsContext);

    const onSubmit = useCallback((event) =>{
        event.preventDefault();
        let str = inputEl.current.value.trim();
        let next;

        if (str.length > 0) {
            next = `/search/${str}`;
        } else {
            next = '/';
        }

        if (next === location.pathname) {
            return;
        }

        history.push(next);
        history.goForward();
    }, [location.pathname, history]);

    useEffect(() => {
        if (location.pathname.startsWith('/search/')){
            inputEl.current.value = location.pathname.replace('/search/', '');
        } else if (location.pathname === '/') {
            inputEl.current.value = '';
        }
    }, [location]);

    const AddNew = useCallback((event) => {
        event.preventDefault();
        modalsContext.setVisible(true);
    }, [modalsContext]);

    const inputEl = useRef();

    return (
        <div className='Header'>
            <form className='Search' onSubmit={onSubmit}>
                <input 
                    type = 'text'
                    placeholder = 'Search in name of goods'
                    className = 'SearchInput'
                    ref = {inputEl}
                />
                <input 
                    type = 'submit'
                    value = 'Search'
                    className = 'SearchBtn'
                />
            </form>
            <div className='AddBtnHolder'>
                <button className='AddBtn' onClick = {AddNew}>
                    Add New
                </button>
            </div>
        </div>
    )
}

export {Header};