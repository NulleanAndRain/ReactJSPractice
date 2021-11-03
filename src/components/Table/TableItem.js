import { ItemActions } from './ItemActions';
import { TableRow } from './TableRow';
import './Table.css';
import { NameCell } from './NameCell';
import { useMemo } from 'react';

export function TableItem(props) {
    return useMemo(() =>
    <TableRow 
        Item1 = {<NameCell name = {props.item.name} count = {props.item.count} />}
        Item2 = {'$' + props.item.price}
        Item3 = {<ItemActions item = {props.item}/>}
    />, [props]);
}