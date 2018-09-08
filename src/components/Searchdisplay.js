import React, { Component } from 'react';

class Searchdisplay extends Component {
    render() {
        let info;
        if (this.props.allBooks.length) {
            info = this.props.allBooks.map((info) => {
                return (
                    <div key={info.id}>
                        <li>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover"
                                        style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${info.imageLinks.thumbnail})`
                                        }}>
                                    </div>
                                    <div className="book-shelf-changer">
                                        <select
                                            onChange={(e) => this.props.onChange(info, e.target.value)}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{info.title}</div>
                                <div className="book-authors">{info.authors}</div>
                            </div>
                        </li>

                    </div>
                )
            })
        } else {
            info = <h3>No Result found</h3>
        }
        return (
            <div>
                <ol className="books-grid">
                    {info}
                </ol>
            </div>

        )
    }
}
export default Searchdisplay;