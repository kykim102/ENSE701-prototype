import axios from "axios";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

// The homepage with searching Function

const Landing = () => {
  const [formData, setFormData] = useState({
    keyWord: "",
    textType: "",
  });

  let [responseData, setResponseData] = React.useState("");

  const { keyWord, textType } = formData;

  // Method handling the input data in the text field
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(formData.textType);

    // Keyword field to send data to the router
    const payload = {
      keyWord: formData.keyWord,
    };
    //Sends and retrieve data
    axios({
      url: `/api/posts/get/${formData.textType}`,
      method: "GET",
      params: payload,
    })
      .then((res) => {
        console.log(res.data);
        setResponseData(res.data);
        console.log(res);
        responseData = JSON.stringify(responseData);
        responseData = JSON.parse(responseData);
      })
      .catch(() => {
        console.log("Internal server error");
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
                <select type='textType' name='textType' value={textType} onChange={(e) => onChange(e)}>
                  <option value=" ">All</option>
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                  <option value="year">Year</option>
                  {/* <option value="source">Source</option>
                  <option value="DOI">DOI</option>
                  <option value="number">Number</option>
                  <option value="volume">Volume</option>
                  <option value="pageNumbers">Page Numbers</option> */}
                </select>
                <input
                  type='keyWord'
                  placeholder='Enter keyword here'
                  name='keyWord'
                  value={keyWord}
                  onChange={(e) => onChange(e)}
                />
                <input
                  type='submit'
                  className='btn btn-primary'
                  value='Search'
                />
              </div>
            </form>
            <div>
              {
                //Recieve data is converted to html and shown to clients
                <Fragment>
                  {Object.keys(responseData).map((keyName, i) => (
                  
                    <div className='card' key={i}>
                    <div className='card-header'>{responseData[i].title}</div>
                    <div className='card-main'>
                      <div className='main-description'>{responseData[i].author}</div>
                      <div className='main-description'>{responseData[i].journal}</div>
                      <div className='main-description'>{responseData[i].year}</div>
                    </div>
                    </div>

                  ))}  
                </Fragment>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
