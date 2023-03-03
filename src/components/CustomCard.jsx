import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CustomCard = ({searchMovie, setsearchMovie}) => {



  return (
<Card style={{ width: '18rem', color: 'black' }}>
    <Card.Img variant="top" src={searchMovie?.Poster} />
    <Card.Body>
      <Card.Title>{searchMovie?.Title}</Card.Title>
      <Card.Text>
       {searchMovie?.Plot}
      </Card.Text>
      <Card.Text>
       {searchMovie?.Released}
      </Card.Text>
      <Card.Text>
       {searchMovie?.imdbRating}
      </Card.Text>
      <div className="d-flex justify-content-between flex-wrap gap-2">
      <Button variant="warning" >Happy</Button>
      <Button variant="info">Lazy</Button>
      </div>
      <div className="d-grid">
      <Button onClick={()=> setsearchMovie({})} variant="danger mt-2">Delete</Button>

      </div>
    </Card.Body>
  </Card>
  )
}
