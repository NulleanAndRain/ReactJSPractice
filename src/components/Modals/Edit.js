import { useCallback, useEffect, useRef } from 'react';
import './Modals.css';

const Edit = (props) => {

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const item = {
            name: nameInput.current.value,
            count: countInput.current.value,
            price: priceInput.current.value
        }
        props.onSubmit(item);
    }, [props]);

    const nameInput = useRef();
    const countInput = useRef();
    const priceInput = useRef();

    useEffect(() => {
        if (!!props.item){
            nameInput.current.value = props.item.name;
            countInput.current.value = props.item.count;
            priceInput.current.value = props.item.price;
        } else {
            nameInput.current.value  = 'item';
            countInput.current.value = 1;
            priceInput.current.value = 10;
        }
    }, [props]);

    return (<div>
        <form onSubmit = {onSubmit} >
            <label className='EditModal_inputRow'>
                Item name <br/>
                <input type='text' ref={nameInput}/>
            </label>
            <label className='EditModal_inputRow'>
                Count <br/>
                <input type='number' ref={countInput}/>
            </label>
            <label className='EditModal_inputRow'>
                Price <br/>
                <input type='number' ref={priceInput} />
            </label>
            <div className='modal_buttons'>
                <input type='button' onClick={props.onCancel} value='Cancel'/>
                <input type='submit' value='Submit'/>
            </div>
        </form>
    </div>);
}

export { Edit }