"use client"
import React, { useState, useContext, useEffect, useRef } from 'react';
import "./addArticle.css"
import axios from 'axios';
import { useParams } from 'next/navigation';
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
// import { logout } from '@/app/utils/context';
import { useRouter } from 'next/navigation';
import withAuth from '../../utils/withAuth';




function AddArticle() {
  const router = useRouter();
  const locale = useParams();
  console.log(locale.locale)
  const { categories, setCategories } = useContext(Context);
  const { logout } = useContext(Context);


  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log("cat-data", res)
      setCategories(res);
    });
  };
 

  useEffect(() => {
    const token = localStorage.getItem('token');
console.log("logout-token",token)
    getCategories();
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    image: " ",
    locale: " ",
    categories: " "
  });

  //////////////////////////////LOGOUT ///////////
  const handleLogout = () => {
    // Clear JWT from local storage
    localStorage.removeItem('token');
    console.log("jwt removed successfully")
    router.push("/");
  }

  const handleChange = (e) => {
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    if (e.target.type === 'file') {
      setFormData({ ...formData, image: e.target.files[0] }); 
    }
    else {
      setFormData({ ...formData, [e.target.name]: e.target.value }); 
    }
  };

  const handleSubmit = async (e) => {
    console.log(formData, "data-form")
    e.preventDefault();

    const formDataToSend = new FormData(); 
    formDataToSend.append('data', JSON.stringify({
      title: formData.title,
      desc: formData.desc,
      locale: formData.locale,
      categories: formData.categories,
      slug:formData.title,
      publishedAt: null,
    }));
    formDataToSend.append('files.image', formData.image); // Append image file


    try {
      const response = await axios.post("http://localhost:1337/api/articles/?populate=categories", formDataToSend, {

        headers: {
          'Content-Type': 'multipart/form-data'
        }


      });
      // if (response.ok) {
      console.log('Article created successfully', response.data);
      setFormData({
        title: '',
        desc: '',
        categories: '',
        locale: '',
        image: ""
      });





    } catch (error) {
      console.error('Error creating article:', error);
      alert("please select language", error)
    }


  };
  return (
    <div>
      <div className="sing-main">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className='arc-head'>
            Add Article
          </div>

          <div>
            <div className='logout-btn' type="submit" onClick={handleLogout} >logout</div>

          </div>
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
              <div id='arc-InpSlt' >

                <h4  >Please select a language:</h4>
                <select name="locale" value={formData.locale} onChange={handleChange}  >
                  <option value=""> select language </option>
                  <option value={"en"}>ENGLISH</option>
                  <option value={"ur"}>URDU / اردو</option>
                </select>

              </div>



            </div>
            <div>


              <h4 id='arc-InpSlt' >Please select a categoy:</h4>
              <select name="categories" value={formData.categories} onChange={handleChange}   >
                <option value=""> select category </option>
                {categories?.data?.map((item, index) => (
                  <option key={index} value={`${item?.id}`}>{item?.attributes.title} / {item?.attributes.urduTitle}</option>

                ))}
              </select>



            </div>
            <div>
              <textarea placeholder='Your Article' type="textarea" id='arc-txtID' name="desc" value={formData.desc} onChange={handleChange}></textarea>

            </div>
            <div className='arc-Btn' type="submit" onClick={handleSubmit} > Post Article</div>
          </div>
        </form>
      </div>
    </div>
  )
}

// export default AddArticle;
export default withAuth(AddArticle);
