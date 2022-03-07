function Submit({ handleSubmit, attempts, won }) {
    return (
        <>
        <div className="col-md-12 d-flex justify-content-center">
            {won &&
            <div class="alert alert-success" role="alert">
            Equation is correct
            </div>}
        </div>

        <div class="alert alert-light" role="alert">
        {`${6-attempts}/6 attempts left`}
        </div>
        
        <div className="row m-2 p-2 d-flex justify-content-center">
            <div className="col-md-1">
                <button className="btn btn-primary" onClick={handleSubmit}>Evaluate</button>
            </div>
        </div>
        </>
    );
}

export default Submit;