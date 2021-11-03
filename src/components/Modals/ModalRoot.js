import { /*useEffect,*/ forwardRef, useMemo } from 'react';
import './Modals.css';

const ModalRoot =  forwardRef((props, ref) => {
    // useEffect(() => {
    //     if (!!props.rootRef.current) {
    //         if (!props.visible) {
    //             props.rootRef.current.children = [];
    //             console.log('ъоъ');
    //         }
    //     } else console.log('ъеъ');
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
                ref = {ref}
            >
                {props.children}
            </div>
        </div>
    }</>,
    [props, ref]);
});

export { ModalRoot };