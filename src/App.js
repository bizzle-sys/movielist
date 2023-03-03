import './App.css';
import { SearchForm } from './components/SearchForm';
import { Display } from './components/Display';
import { CustomCard } from './components/CustomCard'
import { Container, Button, Row, Col } from 'react-bootstrap';

function App() {


  return (
    <div className="wrapper bg-dark text-warning">
      <Container>

        {/* title */}

        <Row>
          <Col>
            <h1 className='mt-5 text-center'>
              My Movie Collection
            </h1>
          </Col>
        </Row>
        <hr />


        {/* form */}
        <SearchForm />

        {/* display */}
        <Display />

      </Container>

    </div>
  );
}

export default App;
