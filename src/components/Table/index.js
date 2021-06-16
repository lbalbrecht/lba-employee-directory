import React from 'react';

function Table(props) {
    return (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.results.map(result => {
                            return (<tr key={result.phone}>
                                <td><img alt={result.name.first} src={result.picture.thumbnail} /></td>
                                <td>{result.name.first} {result.name.last}</td>
                                <td>{result.phone}</td>
                                <td>{result.email}</td>
                                <td>{result.dob.age}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
    )
    
}

export default Table