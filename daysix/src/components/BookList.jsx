import { Component } from "react"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"
import { Col, Container, Form, Row } from "react-bootstrap"

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Search</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search here"
                    value={this.state.searchQuery}
                    onChange={(e) => this.setState({ searchQuery: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                {this.props.books
                  .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
                  .map((b) => (
                    <SingleBook
                      key={b.asin}
                      book={b}
                      changeSelectedBook={(asin) =>
                        this.setState({
                          selectedBook: asin,
                        })
                      }
                    />
                  ))}
              </Col>
            </Row>
          </Col>
          <h4>Comments Area</h4>
          <Col md={4}> {<CommentArea asin={this.state.selectedBook} />}</Col>
        </Row>
      </Container>
    )
  }
}

export default BookList
