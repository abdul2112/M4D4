import React from 'react'
import { Card, Container, Col, Form, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

class BookList extends React.Component {
    state = {
        searchQuery: ''
    }
    render() {
        return (
    <Container fluid>
        <Row>
            <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Search here"
                            value={this.state.searchQuery}
                            onChange={e => this.setState({ searchQuery: e.target.value })}
                        />
    </Form.Group>
            </Col>
        </Row>
        <Row className='d-flex flex-wrap'>
            {
                this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(b => (
                    <Card className='book-cover'>
                        <SingleBook book={b}/></Card>
                ))
            }   
        </Row>
    </Container>
        )
    }
}

export default BookList
