import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'
import Searchdisplay from './Searchdisplay';

class Searchbook extends Component {
    state = {
        allBooks: [],
    }

    getBooks = (e) => {
        let name = e.target.value;
        if (name.length !== 0) {
            BooksAPI.search(name)
                .then((response) => {
                    this.setState({
                        allBooks: response
                    })
                }
                )
                .catch((error) => { console.log('error') })
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={this.props.close}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" name="searchBook" onKeyUp={this.getBooks} />
                    </div>
                </div>
                <div className="search-books-results">
                    <Searchdisplay allBooks={this.state.allBooks} onChange={this.props.onChange} />
                </div>
            </div>
        )
    }
}

export default Searchbook;