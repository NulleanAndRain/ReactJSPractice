import { useMemo } from "react";
import { useSelector } from "react-redux";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";

export function TableDefault(props) {
    const itemsList = useSelector(state => state.currentList);

    return useMemo(() =>
    <>
        <TableHeader />
        {
            itemsList.map((item, id) => 
                <TableItem
                    key = {id}
                    name = {item.name}
                    price = {item.price}
                    count = {item.count}
                />
            )
        }
    </>, [itemsList]);
}