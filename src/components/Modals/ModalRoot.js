import { useMemo } from 'react';
import './Modals.css';

const ModalRoot = (props) => {
    return useMemo(() =>
    <>{props.visible &&
        <div 
            className='ModalRoot' 
            onClick = {() => props.setVisible(false)}
        >
            <div 
                className = 'ModalWrapper' 
                onClick = {e => e.stopPropagation()}
                ref = {props.rootRef}
            />
        </div>
    }</>,
    [props]);
}

export { ModalRoot };