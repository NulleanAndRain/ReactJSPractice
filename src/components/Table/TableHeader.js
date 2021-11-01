import { TableItem } from "./TableItem";

const TableHeader = (props) => {
    return <TableItem 
        Item1 = {<CtrlCell text = 'Name'/>}
        Item2 = {<CtrlCell text = 'Price'/>}
        Item3 = {<>Actions</>}
    />
}

const CtrlCell = props =>{
    return (
        <div className = 'HeaderCell'>
            <span className='HeaderCellText'>{props.text}</span>
            <button onClick = {props.action}> </button>
        </div>
    );
}

export {TableHeader};