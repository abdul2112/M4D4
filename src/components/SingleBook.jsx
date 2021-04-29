import React from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends React.Component {
    state = {
        selected: false
    }
    render() {
        return (
    
    <Card className='book-cover'
    onClick={() => this.setState({ selected: !this.state.selected })}
    style={{ border: this.state.selected ? '.25rem solid red' : 'none' }}
    >
    <Card.Img variant="top" src={this.props.book.img} />

      <Card.Title>{this.props.book.title}</Card.Title>

  </Card>
  )
  }
}

export default SingleBook