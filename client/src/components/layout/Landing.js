import React, { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [formData, setFormData] = useState({
    title: "",
  })

  const { title } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("SUCCESS");
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
