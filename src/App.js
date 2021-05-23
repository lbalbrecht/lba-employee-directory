import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import Table from './components/Table';

function App() {
    return (
        <Router>
            <div>
                <Jumbotron />
                <Wrapper>
                    <Container>
                        <Searchbar />
                        <Table />
                    </Container>
                </Wrapper>
            </div>
        </Router>
    )
}

export default App;
