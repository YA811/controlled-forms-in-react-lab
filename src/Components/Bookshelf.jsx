import { useState } from 'react';

const Bookshelf = (props) =>{

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBooks, setNewBooks] = useState(
    { title: '', author: '' },
  );

  const handleInputChange = (event) => {
    const updatedBooks = {...newBooks, [event.target.name]: event.target.value };
    setNewBooks(updatedBooks);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBooks]);
    setNewBooks({ title: '', author: '' });
  };

  return(
       <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
   <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={newBooks.title} onChange={handleInputChange}/>
      <input type="text" name="author" value={newBooks.author} onChange={handleInputChange}/>
      <button type="submit">Add Book</button>
    </form>
  </div>
  <div className="bookCardsDiv">{books.map((book, index)=>(
    <div key={index} className="bookCard">
      <h4>{book.title}</h4>
      <p>By {book.author}</p>
    </div>  ))}
  </div>
</div>
 
  )
}
 
export default Bookshelf;