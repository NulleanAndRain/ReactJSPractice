import { useMemo } from "react";
import { useSelector } from "react-redux";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";

export function TableDefault(props) {
    const dir = useSelector(state => state.dir);
    const column = useSelector(state => state.column);
    const orderedArr = useMemo(() => {
        if (column === 'id') {
            return props.items;
        } 
        
        let ordered = [...props.items];
        let _dir;
        if (dir === 'asc') {
            _dir = 1;
        } else if (dir === 'desc'){
            _dir = -1;
        }

        if (column === 'name') {
            ordered = ordered.sort((a, b) => {
            return _dir * a.name.localeCompare(b.name);
            });
        } else if(column === 'price'){
            ordered = ordered.sort((a, b) => {
            return _dir * (a.price - b.price);
            });
        }

        return ordered;
    }, [props, dir, column]);

    return useMemo(() =>
    <>
        <TableHeader />
        {
            orderedArr.map((item) => 
                <TableItem
                    key = {item.id}
                    item = {item}
                />
            )
        }
    </>, [orderedArr]);
}