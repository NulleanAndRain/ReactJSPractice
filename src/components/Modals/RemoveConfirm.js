import './Modals.css';

const RemoveConfirm = (props) =>{
    return (
    <div className = 'DeleteModal'>
        <p> 
            Are you sure you want to delete &#160;
            <span className='DeleteModal_itemName'>{props.itemName}</span>? 
        </p>
        <div className='DeleteModal_buttons'>
            <button onClick = {props.onCancel}>Cancel</button>
            <button onClick = {props.onSubmit}>Submit</button>
        </div>
    </div>);
}

export { RemoveConfirm }