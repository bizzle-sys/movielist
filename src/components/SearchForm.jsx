import React from 'react'
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { CustomCard } from './CustomCard';

export const SearchForm = () => {
  return (
    <div className='bg-black p-5 rounded shadow-lg'>
 <Form>
    <Row className='gap-1'>
      <Col md= "9">
        <Form.Control placeholder="Search Name" />
      </Col>
      <Col>
      <div className='d-grid'>
      <Button variant='warning'>Search Movie</Button>
      </div>
      </Col>
    </Row>
  </Form>

  <div className="d-flex justify-content-center mt-5">
    <CustomCard/>
  </div>
  </div>
  )
}
