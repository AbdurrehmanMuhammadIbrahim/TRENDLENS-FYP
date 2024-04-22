// "use client";
// import { useState, useEffect } from "react";
// // import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// // import { sliderData } from "../../slider-data";
// import "./slider.css";


// const sliderData = [
//     {
//       image: "https://i.ibb.co/58Mq6Mb/slide1.jpg",
//       heading: "Slide One",
//       desc: "This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
//     },
//     {
//       image: "https://i.ibb.co/8gwwd4Q/slide2.jpg",
//       heading: "Slide Two",
//       desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
//     },
//     {
//       image: "https://i.ibb.co/8r7WYJh/slide3.jpg",
//       heading: "Slide Three",
//       desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
//     },
//   ];




// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideLength = sliderData.length;

//   const autoScroll = true;
//   let slideInterval;
//   let intervalTime = 4000;

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
//     // console.log("next");
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
//     // console.log("prev");
//   };

//   function auto() {
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }

//   useEffect(() => {
//     setCurrentSlide(0);
//   }, []);

//   useEffect(() => {
//     if (autoScroll) {
//       auto();
//     }
//     return () => clearInterval(slideInterval);
//   }, [currentSlide]);

//   return (
//     <div className="slider">
//       {/* <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} /> */}
//       {/* <AiOutlineArrowRight className="arrow next" onClick={nextSlide} /> */}
//       {sliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === currentSlide ? "slide current" : "slide"}
//             key={index}
//           >
//             {index === currentSlide && (
//               <div>
//                 <img src={slide.image} alt="slide" className="image" />
//                 <div className="sld-content">
//                   <h2>{slide.heading}</h2>
//                   <p>{slide.desc}</p>
                  
//                   <div className="sld-get-btndiv">
//                     <button style={{ backgroundColor: "#fcb900", borderRadius: 10, borderColor: "#fcb900", color: "black", fontWeight: 600, padding: 7, }}>Get Started</button>

//                   </div>
//                </div>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Slider;



"use client"; // This is a client component 👈🏽
import { useState, useEffect,useContext } from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { sliderData } from "../../slider-data";
// import Desgn1 from "../../assets/Group 17598.png"
import "./slider.css";
import Image from 'next/image';
// import { fetchDataFromApi } from "../../utils/api";
// import { Context } from "../../utils/context";
const sliderData = [
  {
    image: "https://i.ibb.co/58Mq6Mb/slide1.jpg",
    heading: "Slide One",
    desc: "This wwwwwwwum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
  {
    image: "https://i.ibb.co/8gwwd4Q/slide2.jpg",
    heading: "Slide Two",
    desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
  {
    image: "https://i.ibb.co/8r7WYJh/slide3.jpg",
    heading: "Slide Three",
    desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  // const { sliders, setSliders } = useContext(Context);
  // const [blogs, setBlogs] = useState("abd");
  // const slideLength = sliders.length;
  const slideLength = sliderData.length;

 
 

  

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 4000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide ===slideLength - 1 ? 0 : currentSlide + 1);
    // console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ?  - 1 : currentSlide + 1);
    // console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">



      {/* <AiOutlineArrowLeft className="sld-arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="sld-arrow next" onClick={nextSlide} /> */}
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
            <img src={slide.image} alt="slide" className="image" />
                {/* <div className="sld-content-dsg" >
                  <Image src={Desgn1} id="desg1" alt="slider-image" />

                </div> */}

                <div className="sld-content">


                <h2>{slide.heading}</h2>
                  <div>{slide.desc}</div>
                  {/* <hr /> */}
                  <div className="sld-get-btndiv">
                    <button style={{ backgroundColor: "#fcb900", borderRadius: 10, borderColor: "#fcb900", color: "black", fontWeight: 600, padding: 7, }}>Get Started</button>

                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;