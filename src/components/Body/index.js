import React, { Component } from 'react';
import getEmployees from '../../utils/API';
import Searchbar from '../Searchbar';
import Table from '../Table';

class Body extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
    };
    
    componentDidMount() {
        getEmployees()
        .then(res => this.setState({ employees: res.data.results, results: res.data.results }))
        .catch(err => console.log(err))
    };

    handleInputChange = event => {
        event.preventDefault()
        // take employees from state and search it for target value and set results
        const filteredList = this.state.employees.filter(employee => {
            let matches = Object.values(employee.name.first)
            .join("")
            .toLowerCase();
            return matches.indexOf(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ results: filteredList })
    };

    render() {
        return (
            <div>
                <Searchbar
                onChange = {this.handleInputChange}
                employees = {this.state.employees}
                />
                <Table results = {this.state.results}/>
            </div>
        );
    }
};

export default Body;