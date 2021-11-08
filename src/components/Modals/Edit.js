import { useCallback, useEffect, useRef } from 'react';
import './Modals.css';

const Eidt = (props) => {

    const onSubmit = useCallback((e) => {
        e.preventDefault();
    }, []);

    const nameInput = useRef();
    const countInput = useRef();
    const priceInput = useRef();

    useEffect(() => {
        nameInput.current.value = props.item.name;
        countInput.current.value = props.item.count;
        priceInput.current.value = props.item.price;
    }, [props]);

    return (<div>
        <form action={onSubmit} >
            <label>
                Item name <br/>
                <input type='text' ref={nameInput}/>
            </label><br/>
            <label>
                Count <br/>
                <input type='number' ref={countInput}/>
            </label><br/>
            <label>
                Price <br/>
                <input type='number' ref={priceInput} />
            </label><br/>
        </form>
    </div>);
}

export { Eidt }