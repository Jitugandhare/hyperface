# Personal Library API

## Objective:
Build a simple backend application to manage a personal book library. The API will allow users to add, view, update, and remove books from their collection.

## Features:
- Add books to the library.
- View All Books.
- Filter books by status and /or genre using query parameter .
- Updating books .
- Delete the book.


## Getting started 

## Installation 

1. Clone this repo or copy the directory
2. Navigate to your project.
3. Install dependencies

```
npm install

```

4. start the server

```
npm run start
```


the default port is 3030


## Api endpoints


### Add a book

http://localhost:3030/add-book

{
    "title": "Midnight's Children",
    "author": "salman",
    "genre": "comedy",
    "status": " reading"

}

