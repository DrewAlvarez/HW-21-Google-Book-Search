import React, { useState} from "react";
import SearchedCard from "../components/SearchedCard"
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List} from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleSearch(event) {
    event.preventDefault();
    API.searchBooks(formObject.title)
      .then(res => setBooks(res.data.items))
  }

  function handleSaveBook(e, book) {
    e.preventDefault();
    API.saveBook({
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      imgLink: book.volumeInfo.imageLinks.smallThumbnail,
      synopsis: book.volumeInfo.description,
      link: book.volumeInfo.previewLink
    })

  }

    return (
      <Container fluid>
            <form style={{marginBottom: "3rem"}}>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(formObject.title)}
                onClick={handleSearch}
              >
                Search Books
              </FormBtn>
            </form>
            <br />
            {books.length ? (
              <List>
                {books.map(book => (
                  <SearchedCard
                    imgSrc={book.volumeInfo.imageLinks.smallThumbnail}
                    title={book.volumeInfo.title}
                    subTitle={book.volumeInfo.subtitle}
                    author={book.volumeInfo.authors}
                    summary={book.volumeInfo.description}
                    saveDelete="Save"
                    handleClick={(e) => handleSaveBook(e, book)}
                    view={book.volumeInfo.previewLink}
                  />
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </Container>
    );
  }


export default Books;
