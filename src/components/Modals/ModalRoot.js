import { /*useEffect,*/ useMemo } from 'react';
import './Modals.css';

const ModalRoot =  (props) => {
    // useEffect(() => {
    //     if (!props.visible) {
    //         props.setModals({});
    //     }
    // }, [props]);

    return useMemo(() =>
    <>{props.visible &&
        <div 
            className='ModalRoot' 
            onClick = {() => props.setVisible(false)}
        >
            <div 
                className = 'ModalWrapper' 
                onClick = {e => e.stopPropagation()}
            >
                {!!props.modals? props.modals : null}
            </div>
        </div>
    }</>,
    [props]);
}

export { ModalRoot };