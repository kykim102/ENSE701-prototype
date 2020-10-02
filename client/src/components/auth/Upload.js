import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Upload = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    journal: "",
    year: "",
  });

  const { author, title, journal, year } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      author: formData.author,
      title: formData.title,
      journal: formData.journal,
      year: formData.year,
    };

    axios({
      url: "/api/posts/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data sent to server");
        alert("Your document has been uploaded");
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Upload document</h1>
      <p className='lead'>Please fill in the form</p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <p>Author</p>
          <input
            type='text'
            placeholder='author'
            name='author'
            value={author}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <p>Document title</p>
          <input
            type='text'
            placeholder='Title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <p>Journal</p>
          <input
            type='text'
            placeholder='Journal'
            name='journal'
            value={journal}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <p>Year published</p>
          <input
            type='text'
            placeholder='year'
            name='year'
            value={year}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Submit' />
      </form>
      <p className='my-1'>
        Need to search document? <Link to='/'>Back to home</Link>
      </p>
    </Fragment>
  );
};

export default Upload;
