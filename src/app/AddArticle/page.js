// "use client"
// import React,{useState} from 'react'
// import "./addArticle.css"

// function AddArticle() {
//   const [formData, setFormData] = useState({
//     title: '',
//     desc: '',
//     image:'',
//     // Add other form fields here
//   });
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {


//     try {
//       const response = await fetch('http://localhost:1337/api/articles?populate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           data:{
//             title:formData.title,
//             // image:formData.image,
//             desc:formData.desc
//           }
//         }),
//       });
//       if (response.ok) {
//         console.log('Article created successfully');
//       } else {
//         console.error('Failed to create article');
//       }
//       const image = await fetch('http://localhost:1337/api/upload/articles?populate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           data:{
          
//             image:formData.image,
            
//           }
//         }),
//       });
//       if (image.ok) {
//         console.log('Article created successfully');
//       } else {
//         console.error('Failed to create article');
//       }
    
    
    
    
    
//     } catch (error) {
//       console.error('Error creating article:', error); 
//     }


//   };
//   return (
//     <div>
//       <div className="sing-main">
//         <div className='arc-head'>
//           LEAVE A COMMENT
//         </div>
//         <form onSubmit={handleSubmit}>
//         <div className='arc-inp'>
//           <div className='arc-inp-name'>
//             <div>
         
//               <input placeholder='title' name="title"  type="text" id='arc-InpID'  value={formData.title}
//         onChange={handleChange}/>
//             </div>

//             <div style={{    margin:" 3% 0%"}}>
//               <h4>Please select an image</h4>
//               <input type="file" accept="image/*" id='arc-InpFile' name="image" value={formData.image}  onChange={handleChange}/>
              
//             </div>

//           </div>

//           <div>
//             <textarea placeholder='Your Article' type="textarea" id='arc-InpID' name="desc" value={formData.desc}  onChange={handleChange}></textarea>

//           </div>
//           <div className='arc-Btn' type="submit" onClick={handleSubmit} > Post Comment</div>
//         </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default AddArticle;


"use client"
import React,{useState} from 'react'
import "./addArticle.css"



function AddArticle() {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    image: '', 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', formData.title);
    formData.append('desc', formData.desc);
    formData.append('files.image', formData.image); // Assuming 'image' is the field name in Strapi

    try {
      const response = await fetch('http://localhost:1337/api/articles', {
        method: 'POST',
        body: formData,
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
          LEAVE A COMMENT
        </div>
        <form onSubmit={handleSubmit}>
          <div className='arc-inp'>
            <div className='arc-inp-name'>
              <input
                placeholder='title'
                name="title"
                type="text"
                id='arc-InpID'
                value={formData.title}
                onChange={handleChange}
              />
              <div style={{ margin:" 3% 0%"}}>
                <h4>Please select an image</h4>
                {/* <input
                  type="file"
                  accept="image/*"
                  id='arc-InpFile'
                  name="image"
                  value={formData.image}
                  onChange={handleImageChange}
                /> */}
                <input
  type="file"
  accept="image/*"
  id='arc-InpFile'
  name="image"
  onChange={handleImageChange}
/>
              </div>
            </div>
            <div>
              <textarea
                placeholder='Your Article'
                type="textarea"
                id='arc-InpID'
                name="desc"
                value={formData.desc}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Post Comment</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddArticle;

