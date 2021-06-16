import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Container from './components/Container';
import Body from './components/Body';

function App() {
    return (
        <Router>
            <div>
                <Jumbotron />
                <Wrapper>
                    <Container>
                        <Body />
                    </Container>
                </Wrapper>
            </div>
        </Router>
    )
}

export default App;
