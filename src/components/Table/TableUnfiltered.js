import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { TableDefault } from "./TableDefault";


const TableUnfiltered = (props) => {
    let dispatch = useDispatch();
    let location = useLocation();
    useEffect(
        () => dispatch({ type: 'restore_filter' }),
        [dispatch, location]
    );

    return <TableDefault/>
}

export { TableUnfiltered };