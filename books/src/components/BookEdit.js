import {useState} from 'react';


function BookEdit({book , onSubmit}) {

  const[title,setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //onEdit ko hamne app se laya hai ass a pro
    onSubmit(book.id,title);


    //console.log("title :" ,title)
  }
  return <form onSubmit = {handleSubmit} className="book-edit">
    <label> Title </label>
    <input className="input" value = {title} onChange = {handleChange} />
    <button className="button is-primary">
      Save
    </button>
  </form>
}

export default BookEdit;
