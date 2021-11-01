import React from 'react';
import './Header.css';

function Header (props) {
    const onSubmit = (event) =>{
        event.preventDefault();
    }
    return (
        <div className='Header'>
            <form className='Search' onSubmit={onSubmit}>
                <input 
                    type = 'text'
                    placeholder = 'Search in name of goods'
                    className = 'SearchInput'
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