import { useCallback, useContext, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { ModalsContext } from '../../App';
import { Edit } from '../Modals/Edit';
import './Header.css';

function Header (props) {
    const history = useHistory();
    const location = useLocation();
    const modalsContext = useContext(ModalsContext);
    const dispatch = useDispatch();
    const inputEl = useRef();

    useEffect(() => {
        if (location.pathname.startsWith('/search/')){
            inputEl.current.value = location.pathname.replace('/search/', '');
        } else if (location.pathname === '/') {
            inputEl.current.value = '';
        }
    }, [location]);

    const onSubmit = useCallback((event) =>{
        event.preventDefault();
        let str = inputEl.current.value.trim();
        let next;

        if (str.length > 0) {
            next = `/search/${str}`;
        } else {
            next = '/';
        }

        history.push(next);
        history.goForward();
    }, [history]);

    const cancel = useCallback(() => {
        modalsContext.closeModals();
    }, [modalsContext]);

    const submitAdd = useCallback((newItem) => {
        dispatch({type: 'add_item', newItem});
        modalsContext.closeModals();
    }, [dispatch, modalsContext]);

    const AddNew = useCallback((event) => {
        event.preventDefault();
        const modal = (
        <Edit 
            item={props.item}
            onCancel = {cancel}
            onSubmit = {submitAdd}
        />);
        modalsContext.setModals(state => [...state, modal]);
        modalsContext.setVisible(true);
    }, [modalsContext, cancel, submitAdd, props]);

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