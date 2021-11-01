import { TableItem } from "./TableItem";

export function TableHeader(props) {
    return <TableItem 
        Item1 = {<>Name</>}
        Item2 = {<>Price</>}
        Item3 = {<>Actions</>}
    />
}