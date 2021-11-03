import './Modals.css';

const RemoveConfirm = (props) =>{
    return <>
        <button onClick = {props.onCancel}>Cancel</button>
        <button onClick = {props.onSubmit}>Submit</button>
    </>;
}

export { RemoveConfirm }