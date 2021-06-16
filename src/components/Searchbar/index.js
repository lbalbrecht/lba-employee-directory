import React from 'react';

function Searchbar(props) {
    return (
        <form className="search">
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    value={props.search}
                    onChange={props.handleInputChange}
                    onSubmit={props.handleFormSubmit}
                    placeholder="Search"
                    id="employee-search"
                />
                <datalist id="employees">{props.employees.map(employee => (
                    <option value={employee} key={employee} />
                ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    )
}

export default Searchbar;