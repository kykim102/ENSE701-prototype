import axios from "axios";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

// The homepage with searching Function

const Landing = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    journal: "",
    year: "",
  });

  let [responseData, setResponseData] = React.useState("");

  const { title } = formData;

  // Method handling the input data in the text field
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Keyword field to send data to the router
    const payload = {
      author: "",
      title: formData.title,
      journal: "",
      year: "",
    };

    axios({
      url: "/api/posts/get",
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
  
  // Search Function that did not work to display all info
  // const displaySearch = (responseData) => {
  //     return (
  //       <div className='card'>
  //         <div className='card-header'>{responseData[0].title}</div>
  //         <div className='card-main'>
  //           <div className='main-description'>{responseData[0].author}</div>
  //           <div className='main-description'>{responseData[0].journal}</div>
  //           <div className='main-description'>{responseData[0].year}</div>
  //         </div>
  //       </div>
  //     )
  // };
  // Below line need to be in Fragment to show data.
  // {responseData ? displaySearch(responseData) : undefined}

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
                <input
                  type='submit'
                  className='btn btn-primary'
                  value='Search'
                />
              </div>
            </form>
            <div>
              {
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
