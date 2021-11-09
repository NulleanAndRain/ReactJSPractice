import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ModalsContext } from '../../App';
import { RemoveConfirm } from '../Modals/RemoveConfirm';
import { Edit } from '../Modals/Edit';

const ItemActions = (props) => {

    const dispatch = useDispatch();
    const modalsContext = useContext(ModalsContext);

    const submitDelete = useCallback(() => {
        dispatch({type: 'remove_item', value: props.item})
        modalsContext.closeModals();
    }, [props, dispatch, modalsContext]);

    const cancel = useCallback(() => {
        modalsContext.closeModals();
    }, [modalsContext]);

    const submitEdit = useCallback((newItem) => {
        newItem.id = props.item.id;
        dispatch({type: 'update_item', oldItem: props.item, newItem});
        modalsContext.closeModals();
    }, [dispatch, props, modalsContext]);

    const remove = useCallback(() => { 
        const modal = (
        <RemoveConfirm 
            onSubmit = {submitDelete}
            onCancel = {cancel}
            itemName={props.item.name}
            key = {modalsContext.modals.length}
        />);
        modalsContext.setModals(state => [...state, modal]);
        modalsContext.setVisible(true);
    }, [modalsContext, submitDelete, cancel, props]);

    const edit = useCallback(() => {
        const modal = (
        <Edit 
            item={props.item}
            onCancel = {cancel}
            onSubmit = {submitEdit}
        />);
        modalsContext.setModals(state => [...state, modal]);
        modalsContext.setVisible(true);
    }, [props, cancel, modalsContext, submitEdit]);

    return (
    <>
        <button className={'ActionButton'} onClick = {edit}>Edit</button>
        <button className={'ActionButton'} onClick = {remove}>Remove</button>
    </>);
};

export {ItemActions};