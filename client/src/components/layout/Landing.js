import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [formData, setFormData] = useState({
    title: "",
    textType: "",
    posts: [],
  })

  const { title } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    axios.get('/')
      .then((res) => {
        this.setState({ posts: formData });
        console.log('Data has been recieved');
      })
      .catch(() => {
        alert('Error retrieving data');
      });
  };

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>

          <h1 className='x-large'>Hello SEER!</h1>
          <p className='lead'>Prototype by 2020 ENSE701 Sem2 Group 3</p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>

          <p className='searchHead'> Search </p>
          <form className='searchForm' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              {/* <select type='textType' name='textType' value={textType} onChange={(e) => onChange(e)}>
                <option value=" "> </option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="year">Year</option>
                <option value="source">Source</option>
                <option value="DOI">DOI</option>
                <option value="number">Number</option>
                <option value="volume">Volume</option>
                <option value="pageNumbers">Page Numbers</option>
              </select> */}
              <input 
              type='title'
              placeholder='Enter title here'
              name='title'
              value={title}
              onChange={(e) => onChange(e)}
              />
              <input type='submit' className='btn btn-primary' value='Search' />
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
