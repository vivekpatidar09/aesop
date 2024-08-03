import React from "react";
import "./SectionThird.css";
import Slider from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "40%",
        right: "-10px",
        zIndex: "2",
        height: "32px",
        cursor: "pointer",
        padding: "2px",
        borderRadius: "50%",
        position: "absolute",
      }}
      onClick={onClick}
    >
      <ArrowForwardIcon style={{ fontSize: "2rem" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "40%",
        left: "-10px",
        zIndex: "2",
        cursor: "pointer",
        height: "32px",
        padding: "2px",
        borderRadius: "50%",
        position: "absolute",
      }}
      onClick={onClick}
    >
      <ArrowBackIcon style={{ fontSize: "2rem" }} />
    </div>
  );
}

const data = [
  {
    id: 1,
    img: "../sec2Produc1.avif",
    head: "Eleos Aromatique Hand Balm",
    para: "Offers rich hydration for weather-wearied hands",
  },
  {
    id: 2,
    img: "./product2.avif",
    head: "Resurrection Aromatique Hand Balm",
    para: "Citrus, woody and herbaceous aroma",
  },

  {
    id: 3,
    img: "./product3.avif",
    head: "Resurrection Aromatique Hand Balm ",
    para: "Woody, earthy, smoky aroma",
  },
  {
    id: 4,
    img: "./product4.avif",
    head: "Reverence Aromatique Hand Wash",
    para: "A gently exfoliating formulation",
  },
  {
    id: 5,
    img: "./product5.avif",
    head: "Resurrection Aromatique Hand Wash",
    para: "Gentle cleansing for hard-working hands",
  },
  {
    id: 6,
    img: "./product4.avif",
    head: "Resurrection Hand Care Duo",
    para: "Two staples for deserving hands",
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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

function SectionThird() {
  return (
    <div className="thirdMain">
      <div className="SectionThird">
        <Slider {...settings}>
          {data.map((x) => {
            return (
              <div>
                <div key={x.id} className="product">
                  <img src={x.img} alt="" />
                  <h4>{x.head}</h4>
                  <p>{x.para}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SectionThird;
