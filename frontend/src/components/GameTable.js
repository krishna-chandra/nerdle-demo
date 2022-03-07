import Row from "./Row";

function GameTable({ tableData, updateCellValue, attempts }) {
    return (
        <div className="row m-2 p-2 d-flex justify-content-center">
            <div className="col-md-6 d-flex justify-content-center">
                <table>
                    <tbody>
                        {tableData.map((row, index) => {
                            return <Row index={index} columns={tableData[index]} updateCellValue={updateCellValue} active={index === attempts} />;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GameTable;