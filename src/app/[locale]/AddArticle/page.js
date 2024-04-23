"use client"
import React, { useState } from 'react'
import "./addArticle.css"
import axios from 'axios';
import { useParams } from 'next/navigation';

function AddArticle() {
  const locale = useParams();
  console.log(locale.locale)
  
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    image: " ",
locale:" ",
    // Add other form fields here
  });

  const handleChange = (e) => {
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    if (e.target.type === 'file') {
      setFormData({ ...formData, image: e.target.files[0] }); // Store uploaded image
    }
    else {
      setFormData({ ...formData, [e.target.name]: e.target.value }); // Handle other form fields
    }
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();

    const formDataToSend = new FormData(); // Use FormData for multipart data
    formDataToSend.append('data', JSON.stringify({
      title: formData.title,
      desc: formData.desc,
      locale:formData.locale,
      publishedAt: null,

    }));
    formDataToSend.append('files.image', formData.image); // Append image file


    try {
      const response = await axios.post("http://localhost:1337/api/articles", formDataToSend, {

        headers: {
          'Content-Type': 'multipart/form-data'
        }


      });
      // if (response.ok) {
      console.log('Article created successfully', response.data);
      // } else {
      //   console.error('Failed to create article');
      // }





    } catch (error) {
      console.error('Error creating article:', error);
      alert("please select language" , error)
    }


  };
  return (
    <div>
      <div className="sing-main">
        <div className='arc-head'>
          Add Article
        </div>
        <form onSubmit={handleSubmit}>
          <div className='arc-inp'>
            <div className='arc-inp-name'>
              <div>

                <input placeholder='title' name="title" type="text" id='arc-InpID' value={formData.title}
                  onChange={handleChange} />

              </div>

              <div style={{ margin: " 3% 0%" }}>
                <h4>Please select an image</h4>
                <input type="file" accept="image/*" id='arc-InpFile' name="image" onChange={handleChange} />

              </div>
              <div>

                <h4 for="cars">Please select a language:</h4>
                <select  name="locale" value={formData.locale} onChange={handleChange}  id='arc-InpSlt' >
                <option value=""> select language </option>
                  <option  value={"en"}>ENGLISH</option>
                  <option value={"ur"}>URDU / اردو</option>
                </select>

              </div>
            </div>

            <div>
              <textarea placeholder='Your Article' type="textarea" id='arc-InpID' name="desc" value={formData.desc} onChange={handleChange}></textarea>

            </div>
            <div className='arc-Btn' type="submit" onClick={handleSubmit} > Post Comment</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddArticle;

