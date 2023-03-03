import React, {useRef, useState} from 'react'
import { Alert, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { fetchMovies } from '../helper/fetchHelper';
import { CustomCard } from './CustomCard';

export const SearchForm = () => {
    const strRef = useRef("")
    const [searchMovie, setsearchMovie] = useState({})
    const [error, setError] = useState(false)

    const handleonSubmit = async (e)=>{
        e.preventDefault()
        error && setError(false)

        const str = strRef.current.value
        
      // call api and get movie details
       const data = await fetchMovies(str)
       if (data.Response === "True"){

        setsearchMovie(data)
       }else{
        setError(true)
       }
       
       console.log(data)
    }
  return (
    <div className='bg-black p-5 rounded shadow-lg'>
    <Form onSubmit={handleonSubmit}>
    <Row className='gap-1'>
      <Col md= "9">
        <Form.Control ref={strRef} placeholder="Search Name" />
      </Col>
      <Col>
      <div className='d-grid'>
      <Button variant='warning' type='submit'>Search Movie</Button>
      </div>
      </Col>
    </Row>
  </Form>

  <div className="d-flex justify-content-center mt-5">
    {error?(
      <Alert variant='danger'>Movie not found</Alert>
    ):(
    <CustomCard setsearchMovie={setsearchMovie} searchMovie={searchMovie}/>)}
  </div>
  </div>
  )
}
