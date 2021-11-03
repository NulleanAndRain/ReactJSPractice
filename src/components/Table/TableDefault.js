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
            itemsList.map((item) => 
                <TableItem
                    key = {item.id}
                    item = {item}
                />
            )
        }
    </>, [itemsList]);
}