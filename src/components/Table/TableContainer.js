import { ItemActions } from "./ItemActions";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";

export function TableContainer(props) {
    var tableItems = [
        {name: 'item', price: 200},
        {name: 'rusty bow', price: 3000},
        {name: 'fungi', price: 20},
        {name: 'item', price: 200},
        {name: 'item', price: 200}
    ]

    return (
    <>
        <TableHeader text={props.text}/>
        {
            tableItems.map((item, id) => 
                <TableItem
                    key = {id}
                    Item1 = {item.name}
                    Item2 = {item.price}
                    Item3 = {<ItemActions />}
                />
            )
        }
    </>
    );
}