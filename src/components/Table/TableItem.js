import './Table.css';

export function TableItem(props) {
    return (
    <div className = 'TableItem'>
        <span className = 'TableCell1'>{props.Item1}</span>
        <span className = 'TableCell2'>{props.Item2}</span>
        <span className = 'TableCell3'>{props.Item3}</span>
    </div>);
}