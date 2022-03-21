import React from "react"
import { Card, Col } from "react-bootstrap"
import CommentArea from "./CommentArea"

class SingleBook extends React.Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <>
        <Col xs={3}>
          <Card
            onClick={() => this.setState({ selected: !this.state.selected })}
            style={{ border: this.state.selected ? "3px solid red" : "none" }}
          >
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>{this.props.book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3}>{this.state.selected && <CommentArea id={this.props.book.asin} />}</Col>
      </>
    )
  }
}

export default SingleBook
