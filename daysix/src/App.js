import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"
import fantasyBooks from "./fantasyBooks.json"
import { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WarningSign text="Watch out again!" />
          <MyBadge text="NEW!!" color="info" />
          <SingleBook book={fantasyBooks[0]} />
          <BookList books={fantasyBooks} />
        </header>
      </div>
    )
  }
}

export default App
