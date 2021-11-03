import { useCallback, useRef } from 'react';
import { TableRow } from './TableRow';

const TableHeader = (props) => {
    const sortByName = () => {
        console.log('sortByName');
    };
    const sortByPrice = () => {
        console.log('sortByPrice');
    };
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
            if (!!props.action) props.action(event);
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