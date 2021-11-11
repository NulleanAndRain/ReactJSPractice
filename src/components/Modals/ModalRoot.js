import { useCallback, useContext, useMemo } from 'react';
import { ModalsContext } from '../../App';
import './Modals.css';

const ModalRoot =  (props) => {
    const modalsContext = useContext(ModalsContext);

    const bgClick = useCallback(e => {
        e.stopPropagation();
        modalsContext.closeModals();
    }, [modalsContext]);

    return useMemo(() =>
    <>{modalsContext.visible &&
        <div 
            className='ModalRoot' 
            onClick = { bgClick }
        >
            <div 
                className = 'ModalWrapper' 
                onClick = {e => e.stopPropagation()}
            >
                {!!modalsContext.modals &&
                    modalsContext.modals[modalsContext.modals.length - 1] 
                }
            </div>
        </div>
    }</>,
    [modalsContext, bgClick]);
}

export { ModalRoot };