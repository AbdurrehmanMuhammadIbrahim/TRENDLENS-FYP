"use client"
import React, { useState } from 'react'
import "./addArticle.css"

function AddArticle() {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    publishedAt: null,
    categories:[{title:"Religious"},]
    // image: null,
    
    // Add other form fields here
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    console.log(formData)
    try {

      const form = new FormData();
      form.append('files', formData.image); // append file
      form.append('data', JSON.stringify(formData)); // append other form data

      const response = await fetch('http://localhost:1337/api/articles', {
        method: 'POST',
        body: form,


      });
      if (response.ok) {
        console.log('Article created successfully');
      } else {
        console.error('Failed to create article');
      }





    } catch (error) {
      console.error('Error creating article:', error);
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
                <input type="file" accept="image/*" id='arc-InpFile' name="image" value={formData.image} onChange={handleChange} />

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


// "use client"
// import React, { useState } from 'react';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('files', file);

//       const response = await fetch('http://localhost:1337/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         console.log('File uploaded successfully');
//       } else {
//         console.error('Failed to upload file');
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload File</button>
//     </div>
//   );
// };

// export default FileUpload;
