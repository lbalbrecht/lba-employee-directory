import React from 'react';

function Searchbar(props) {
    return (
    <input 
    className="form-control" 
    type="text" 
    value={props.search}
    onChange={props.handleInputChange}
    placeholder="Search"
    id="employee-search"/>
    )
}

export default Searchbar;