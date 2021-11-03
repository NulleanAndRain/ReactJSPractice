import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ModalsContext } from '../../App';
import { RemoveConfirm } from '../Modals/RemoveConfirm';

const ItemActions = (props) => {

    const dispatch = useDispatch();
    const modalsContext = useContext(ModalsContext);

    const submitDelete = useCallback(() => {
        dispatch({type: 'remove_item', value: props.item})
    }, [props, dispatch]);

    const cancelDelete = useCallback(() => {
        modalsContext.setVisible(false);
    }, [modalsContext])

    const remove = useCallback(() => { 
        const modal = <RemoveConfirm onSubmit = {submitDelete} onCancel = {cancelDelete}/>
        modalsContext.setModals(state => [...state, modal]);
        modalsContext.setVisible(true);
    }, [modalsContext, submitDelete, cancelDelete])

    return (
    <>
        <button className={'ActionButton'}>Edit</button>
        <button className={'ActionButton'} onClick = {remove}>Remove</button>
    </>);
};

export {ItemActions};