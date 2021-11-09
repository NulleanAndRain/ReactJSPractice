import { useSelector } from "react-redux";
import { TableDefault } from "./TableDefault";


const TableUnfiltered = (props) => {
    const items = useSelector(state => state.allItems);

    return <TableDefault items = {items} />
}

export { TableUnfiltered };