import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Mindful.css'; // Import the custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';




const Mindful = () => {
  const [mindfulText, setMindfulText] = useState('');

  useEffect(() => {
    fetch('/mindful.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        setMindfulText(randomLine);
      });
  }, []);

  return (
<Container className="d-flex justify-content-center align-items-center text-center min-vh-100 bg-dark text-light">
<Row className="w-100">
        <Col>
          <h1 className="display-4 mb-4">Today, we will be Mindful by doing...</h1>
          <h2 className="text-primary">{mindfulText}</h2>
        </Col>
      </Row>
    </Container>
  );
};




function App() {
  return (
    <div className="App">
      <Mindful />
    </div>
  );
}

export default App;
