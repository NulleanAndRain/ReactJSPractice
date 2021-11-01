import { useState } from 'react';
import { ItemActions } from "./ItemActions";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";

import data from '../../data/items.json'

export function TableContainer(props) {
    const [tableItems, updateItems] = useState([...data]);
    return (
    <>
        <TableHeader text={props.text}/>
        {
            tableItems.map((item, id) => 
                <TableItem
                    key = {id}
                    Item1 = {item.name}
                    Item2 = {'$' + item.price}
                    Item3 = {<ItemActions />}
                />
            )
        }
    </>
    );
}