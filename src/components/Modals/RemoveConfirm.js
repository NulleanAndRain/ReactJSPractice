import './Modals.css';

const RemoveConfirm = (props) =>{
    return (
    <div className = 'DeleteModal'>
        <button onClick = {props.onCancel}>Cancel</button>
        <button onClick = {props.onSubmit}>Submit</button>
    </div>);
}

export { RemoveConfirm }