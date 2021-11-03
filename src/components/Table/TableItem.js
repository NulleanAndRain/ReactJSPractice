import { ItemActions } from './ItemActions';
import { TableRow } from './TableRow';
import './Table.css';
import { NameCell } from './NameCell';

export function TableItem(props) {
    return (
    <TableRow 
        Item1 = {<NameCell name = {props.name} count = {props.count} />}
        Item2 = {'$' + props.price}
        Item3 = {<ItemActions />}
    />);
}