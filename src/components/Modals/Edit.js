import { useCallback, useEffect, useRef, useState } from 'react';
import './Modals.css';

const validateName = (name) => {
    const len = name.trim().length;
    const maxLen = 15;
    return len !== 0 && len <= maxLen;
}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

const Edit = (props) => {
    const nameInput = useRef();
    const emailInput = useRef();
    const countInput = useRef();
    const priceInput = useRef();

    let [price, setPrice] = useState(0);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const item = {
            name: nameInput.current.value,
            count: countInput.current.value,
            price
        }
        props.onSubmit(item);
    }, [props, price]);

    useEffect(() => {
        if (!!props.item){
            nameInput.current.value = props.item.name;
            countInput.current.value = props.item.count;
            priceInput.current.value = '$' + props.item.price;
            setPrice(props.item.price);
        } else {
            nameInput.current.value  = 'item';
            countInput.current.value = 1;
            priceInput.current.value = 10;
            setPrice(10);
        }
    }, [props]);


    const onFocusPrice = useCallback(() => {
        const numStr = priceInput.current.value.replace("$", '');
        const num = parseFloat(numStr);
        priceInput.current.type = 'number';
        priceInput.current.value = num;
    }, [priceInput]);

    const onBlurPrice = useCallback(() => {
        setPrice(parseFloat(priceInput.current.value));
        priceInput.current.type = 'text';
        priceInput.current.value = `$${price}`;
    }, [priceInput, setPrice, price])

    return (<div>
        <form onSubmit = {onSubmit} >
            <label className='EditModal_inputRow'>
                Item name <br/>
                <input type='text' ref={nameInput}/>
            </label>
            <label className='EditModal_inputRow'>
                Email <br/>
                <input type='email' ref={emailInput} placeholder='email@example.com'/>
            </label>
            <label className='EditModal_inputRow'>
                Count <br/>
                <input type='number' ref={countInput}/>
            </label>
            <label className='EditModal_inputRow'>
                Price <br/>
                <input 
                    type='text'
                    ref={priceInput} 
                    onFocus={onFocusPrice}
                    onBlur={onBlurPrice}
                />
            </label>
            <div className='modal_buttons'>
                <input type='button' onClick={props.onCancel} value='Cancel'/>
                <input type='submit' value='Submit'/>
            </div>
        </form>
    </div>);
}

export { Edit }