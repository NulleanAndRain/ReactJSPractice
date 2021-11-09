import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { TableDefault } from "./TableDefault";

const TableFiltered = props => {
    let { searchFilter } = useParams();
    const allItems = useSelector(state => state.allItems);

    const arr = useMemo(() =>
        allItems.filter(e => e.name.toLowerCase().includes(searchFilter.toLowerCase())),
        [allItems, searchFilter]
    );

    return <TableDefault items = {arr}/>;
};

export { TableFiltered }