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
        console.log('click')
        // take employees from state and search it for target value and set results
        this.setState({ search: event.target.value })
        console.log(this.state.search)
        this.state.employees.results.name.first.filter(event.target.value)
        console.log(event.target.value)
        .then(this.setState({ results: event.target.value }))
        .catch(err => console.log(err))
        this.setState({ results: this.state.search })
    };

    // handleFormSubmit = event => {
    //     // sort results
    //     // piece of state to designate ascending or descending
    //     // take current results and sort them
    //     event.preventDefault();
    //     // .then(res => {
    //     //     if (res.data.status === "error") {
    //     //         throw new Error(res.data.message)
    //     //     }
    //     //     this.setState({ employees: res.target.value, error: "" })
    //     // })
    //     // .catch(err => this.setState({ error: err.message }))
    // }
    render() {
        return (
            <div>
                <Searchbar
                onChange = {this.handleInputChange}
                // onSubmit = {this.handleFormSubmit}
                employees = {this.state.employees}
                />
                <Table results = {this.state.results}/>
            </div>
        );
    }
};

export default Body;