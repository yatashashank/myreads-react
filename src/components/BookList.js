import React, { Component } from 'react';
import Bookshelf from './Bookshelf'

class BookList extends Component {

    render() {
        //console.log(this.props.books)
        const bookshelf = ['Currently Reading', 'Want to Read', 'Read'].map(
            mode => (
                <Bookshelf key={mode}
                    title={mode}
                    books={this.props.books}
                    onChange={this.props.onChange} />
            ))
        return (
            <div>
                {bookshelf}
            </div>
        )
    }
}
export default BookList;