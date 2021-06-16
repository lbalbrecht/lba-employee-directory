import React, { Component } from 'react';
import API from '../../utils/API';
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
        API.getEmployees()
        .then(res => this.setState({ employees: res.data.results }))
        .catch(err => console.log(err))
    };

    handleInputChange = event => {
        API.getEmployees()
        this.setState({ search: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getEmployees(this.state.search)
        .then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message)
            }
            this.setState({ employees: res.target.value, error: "" })
        })
        .catch(err => this.setState({ error: err.message }))
    }
    render() {
        return (
            <div>
                <Searchbar
                onChange = {this.handleInputChange}
                onSubmit = {this.handleFormSubmit}
                employees = {this.state.employees}
                />
                <Table results = {this.state.employees}/>
            </div>
        );
    }
};

export default Body;