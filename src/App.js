import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Searchbook from './components/Searchbook'
import BookList from './components/BookList'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }
  //For closing the search
  close = () => {
    this.setState({ showSearchPage: false })
  }
  //
  getAllBooks = () => {
    BooksAPI.getAll().then(response => this.setState({ books: response }))
  }
  //
  componentDidMount() {
    this.getAllBooks();
  }
  //
  onChange = (book, newshelf) => {
    console.log(book)
    console.log(newshelf)
    BooksAPI.update(book, newshelf).then(() => {
      this.getAllBooks()
    })
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (<Searchbook close={this.close} onChange={this.onChange} books={this.state.books} />) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content" >
              <BookList onChange={this.onChange} books={this.state.books} />
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default BooksApp
