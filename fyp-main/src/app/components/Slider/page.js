"use client"; // This is a client component 👈🏽
import { useState, useEffect, useContext } from "react";

import "./slider.css";
import Image from 'next/image';
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const title = useParams();
  const t = useTranslations("slider")

  console.log("sld", t.locale)

  const sliderData = [
    {
      image: "https://img.freepik.com/premium-photo/news-update_693425-32236.jpg?w=900",
      heading: `${t("head")}`,
      desc: `${t("slide-1")}`,
    },
    {
      image: "https://img.freepik.com/free-photo/full-moon-sky-sea-water_23-2148282854.jpg?t=st=1713975017~exp=1713978617~hmac=383431852a4d57858da07692ed481145ecb0e3e3598a16f2eaf47e10cf0cd5c2&w=740"
      , heading: `${t("head")}`,
      desc: `${t("slide-3")}`,
    },
    {
      image: "https://i.ibb.co/8r7WYJh/slide3.jpg",
      heading: `${t("head")}`,
      desc: `${t("slide-3")}`
    },
  ];

  const [label, setLabel] = useState();
  const slideLength = sliderData.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    // console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? - 1 : currentSlide + 1);
    // console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  useEffect(() => {
    if (title.locale === 'ur') {
      setLabel({ textAlign: "right", fontFamily: "Jameel Noori Nastaleeq", fontSize: "20pt", wordSpacing: "4pt" })
    }
    else if (title.locale === 'en') {
      setLabel({ textAlign: "left", fontFamily: "Garamond", fontSize: "18pt" })
    }

  }, [title]);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">

      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />


                <div className="sld-content" style={label}>


                  <h2 >{slide.heading}</h2>
                  <div>{slide.desc}</div>
                  {/* <hr /> */}

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