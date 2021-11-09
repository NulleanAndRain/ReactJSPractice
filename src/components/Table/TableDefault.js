import { useMemo } from "react";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";

export function TableDefault(props) {

    return useMemo(() =>
    <>
        <TableHeader />
        {
            props.items.map((item) => 
                <TableItem
                    key = {item.id}
                    item = {item}
                />
            )
        }
    </>, [props]);
}