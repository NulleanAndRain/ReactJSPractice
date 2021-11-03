

const NameCell = (props) => {
    return (
        <div className = 'NameCell'>
            <div className = 'NameCell_Name'>
                {props.name}
            </div>
            <div className = 'NameCell_Count'>
                {props.count}
            </div>
        </div>
    );
}

export { NameCell }