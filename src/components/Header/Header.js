import { useCallback, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Header.css';

function Header (props) {
    let history = useHistory();
    let location = useLocation();

    const onSubmit = useCallback((event) =>{
        event.preventDefault();
        let str = inputEl.current.value.trim();
        let next;


        if (str.length > 0) {
            next = `/search/${str}`;
        } else {
            next = '/';
        }

        if (next === location.pathname) return;

        history.push(next);
        history.goForward();
    }, [location.pathname, history]);

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
                <button className='AddBtn'>
                    Add New
                </button>
            </div>
        </div>
    )
}

export {Header};