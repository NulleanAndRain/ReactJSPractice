import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

function Header (props) {
    let history = useHistory();

    const onSubmit = (event) =>{
        event.preventDefault();
        let str = inputEl.current.value.trim();
        if (str.length > 0) {
            history.push(`/search/${str}`);
        } else {
            history.push('/');
        }
    }
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