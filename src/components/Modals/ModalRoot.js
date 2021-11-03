import { createContext, useRef, useState } from 'react';
import './Modals.css';

export const ModalsContext = createContext({ root: null, visible: false, setVisible: () => {}});

const ModalRoot = (props) => {
    const rootRef = useRef();
    const [visible, setVisible] = useState();

    return (
    <ModalsContext.Provider value = { {root: rootRef, visible, setVisible} }> 
        {visible &&
        <div className='ModalRoot' ref = {rootRef}/>
        }
    </ModalsContext.Provider>);
}

export { ModalRoot };