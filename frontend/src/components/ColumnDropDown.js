function ColumnDropDown(props) {
    function handleChange(event) {
        props.setNumColumns(Number(event.target.value));
    }

    async function updateGameDifficulty(difficulty) {
        try {
            await fetch(`/game/difficulty/${difficulty}`);
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="row m-2 p-2 d-flex justify-content-center">
            <div className="col-md-4">
                <div className="form-group">
                    <label>Select Number of columns</label>
                    <select className="form-control" onChange={handleChange}>
                        <option value="">Select number of columns</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ColumnDropDown;