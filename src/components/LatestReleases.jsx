import React from 'react'
import { Card } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'

console.log(fantasy)
const LatestReleases = () => (
    <div className='d-flex flex-wrap'>{
        fantasy.map(book => {
            // return <img className='book-cover' src={book.img} />
            // return <img className='book-cover' src={book.img} />
            return <Card className='book-cover'>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>

            // return (
            //     <Container fluid>
            //         <Row className='d-flex flex-wrap'>
            //             <Col xs={12} md={4} lg={3}><img className='book-cover' src={book.img} /></Col>
            //         </Row>
            //     </Container> 
            //     )
        })
        }</div>
    )

export default LatestReleases