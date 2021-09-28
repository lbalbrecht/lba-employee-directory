import React from 'react';

function Searchbar(props) {
    return (
        <form className="search">
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    value={props.search}
                    onChange={props.onChange}
                    placeholder="Search"
                    id="employee-search"
                />
                <datalist id="employees">{props.employees.map(employee => (
                    <option value={employee} key={employee.id.value} />
                ))}
                </datalist>
            </div>
        </form>
    )
}

export default Searchbar;