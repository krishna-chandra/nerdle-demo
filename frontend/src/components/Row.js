function Row({ index, columns, updateCellValue, active }) {
    function handleChange(e, columnIndex) {
        updateCellValue(e.target.value, index, columnIndex);
    }

    function getBackgroundColor(cellData) {
        if(cellData.state) {
            if(cellData.state === 'Correct') {
                return 'bg-success';
            }
            else if(cellData.state === 'Present') {
                return 'bg-warning';
            }
            else if(cellData.state === 'Wrong') {
                return 'bg-secondary';
            }
        }
        else {
            return 'bg-light';
        }
    }

    return (
        <tr>
            {columns.map((column, columnIndex) => {
                return (
                    <td>
                        <input type='text' className={`form-control m-1 ${getBackgroundColor(column)}`} value={column.value} onChange={ (e) => { handleChange(e, columnIndex); }} style={{ width: '48px', height: '48px', textAlign: 'center' }} disabled={!active} />
                    </td>
                );
            })}
        </tr>
    )
}

export default Row;