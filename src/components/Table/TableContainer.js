import { useMemo } from "react";
import { ItemActions } from "./ItemActions";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";

export function TableContainer(props) {
    return useMemo(() =>
    <>
        <TableHeader />
        {
            props.itemsList.map((item, id) => 
                <TableItem
                    key = {id}
                    Item1 = {item.name}
                    Item2 = {'$' + item.price}
                    Item3 = {<ItemActions />}
                />
            )
        }
    </>, [props.itemsList]);
}