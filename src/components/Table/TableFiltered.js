import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { TableDefault } from "./TableDefault";

const TableFiltered = props => {
    let { searchFilter } = useParams();
    //use dispatcher to filter (?)
    const dispatch = useDispatch();
    useEffect(
        () => dispatch({type: 'filter', value: searchFilter}),
        [dispatch, searchFilter]
    );

    return <TableDefault/>;
};
export { TableFiltered }