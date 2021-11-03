import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TableRow } from './TableRow';

const TableHeader = (props) => {
    let dispatch = useDispatch();

    const sortByName = useCallback((dir) => {
        dispatch({type: 'order_by', column: 'name', dir});
    }, [dispatch]);

    const sortByPrice = useCallback((dir) => {
        dispatch({type: 'order_by', column: 'price', dir});
    }, [dispatch]);

    return <TableRow 
        Item1 = {<CtrlCell text = 'Name' action = {sortByName}/>}
        Item2 = {<CtrlCell text = 'Price' action = {sortByPrice}/>}
        Item3 = {<>Actions</>}
    />
}

const CtrlCell = props =>{
    const btn = useRef();
    const click = useCallback(
        (event) => {
            event.preventDefault();
            const elem = btn.current;
            elem.classList.toggle('Rotate');

            let dir;
            if (btn.current.classList.contains('Rotate')){
                dir = 'desc';
            } else {
                dir = 'asc';
            }

            if (!!props.action) props.action(dir);
        }
    ,[btn, props]);

    return (
        <div className = 'HeaderCell'>
            <span className='HeaderCellText'>{props.text}</span>
            <button 
                onClick = {click}
                ref = {btn}
                className = 'Triangle'
            >△</button>
        </div>
    );
}

export {TableHeader};