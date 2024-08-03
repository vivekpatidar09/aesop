import React from "react";
import "./SectionTen.css";
import Slider from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "40%",
        right: "3%",
        zIndex: "2",
        height: "32px",
        cursor: "pointer",
        padding: "2px",
        borderRadius: "50%",
        position: "absolute",
      }}
      onClick={onClick}
    >
      <ArrowForwardIcon style={{ fontSize: "2rem", color: "white" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "40%",
        left: "12px",
        zIndex: "2",
        cursor: "pointer",
        height: "32px",
        padding: "2px",
        borderRadius: "50%",
        position: "absolute",
      }}
      onClick={onClick}
      className="arrowLeft"
    >
      <ArrowBackIcon style={{ fontSize: "2rem", color: "white" }} />
    </div>
  );
}

const data = [
  {
    id: 1,
    img: "./SectionTenImg1.avif",
    head: "Aesop YOHO Mall",
  },
  {
    id: 2,
    img: "./SectionTenImg2.avif",
    head: "Aesop Hollywood Road",
  },
  {
    id: 3,
    img: "./SectionTenImg3.avif",
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function SectionTen() {
  return (
    <div>
      <div className="SectionTen">
        <div className="mainSec">
          <div className="sec1">
            <div className="col2">
              <h1>Store locator</h1>
              <p>
                Our consultants are available to host you in-store and provide
                tailored guidance on gift purchases.
              </p>
              <a href="" className="btn">
                <p>Find a nearby store</p>
                <ArrowForwardIcon />
              </a>
            </div>
          </div>
          <div className="sec2">
            <Slider {...settings}>
              {data.map((x) => {
                return (
                  <div>
                    <div key={x.id} className="scrollImg">
                      <img src={x.img} />
                      <h4>{x.head}</h4>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTen;
