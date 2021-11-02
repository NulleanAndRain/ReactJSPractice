import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ItemActions } from "./ItemActions";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";

export function TableContainer(props) {
    const itemsList = useSelector(state => state.currentList);

    return useMemo(() =>
    <>
        <TableHeader />
        {
            itemsList.map((item, id) => 
                <TableItem
                    key = {id}
                    Item1 = {item.name}
                    Item2 = {'$' + item.price}
                    Item3 = {<ItemActions />}
                />
            )
        }
    </>, [itemsList]);
}