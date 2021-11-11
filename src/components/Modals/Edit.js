import { useCallback, useEffect, useRef, useState } from 'react';
import './Modals.css';

// const validateName = (name) => {
//     const len = name.trim().length;
//     const maxLen = 15;
//     return len !== 0 && len <= maxLen;
// }

// const validateEmail = (email) => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email.toLowerCase());
// }

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

    const onFocusPrice = useCallback(() => {
        priceInput.current.type = 'number';
        priceInput.current.value = price;
        console.log('focus');
    }, [priceInput, price]);

    const setPriceInput = useCallback((val) => {
        if (priceInput.current.type === 'text') {
            const _pStr = val.toLocaleString('en-US', { 
                style: 'currency',
                currency: 'USD',
                currencyDisplay: 'symbol',
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
            });
            priceInput.current.value = _pStr;
        }
    }, [priceInput]);

    const onBlurPrice = useCallback(() => {
        const _p = parseFloat(priceInput.current.value);
        setPrice(_p);
        priceInput.current.type = 'text';
        setPriceInput(_p);
    }, [priceInput, setPriceInput]);



    useEffect(() => {
        if (!!props.item){
            nameInput.current.value = props.item.name;
            countInput.current.value = props.item.count;
            setPrice(props.item.price);
            setPriceInput(props.item.price);
        } else {
            const _p = 10;
            nameInput.current.value  = 'item';
            countInput.current.value = 1;
            setPrice(_p);
            setPriceInput(_p);
        }
    }, [props, setPriceInput]);

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