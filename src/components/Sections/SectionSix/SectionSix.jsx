import React from "react";
import "./SectionSix.css";
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
        right: "-5px",
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
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        top: "40%",
        left: "-5px",
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
    img: "./Sec6product1.avif",
    head: "Post-Poo Drops",
    para: "A botanical bathroom deodoriser",
  },
  {
    id: 2,
    img: "./Sec6product2.avif",
    head: "  Aganice Aromatique Candle",
    para: "Cardamom, Mimosa, Tobacco",
  },

  {
    id: 3,
    img: "./Sec6product3.avif",
    head: "Ptolemy Aromatique Candle",
    para: "A sensuous blend of leather, smoke and wood",
  },
  {
    id: 4,
    img: "./Sec6product3.avif",
    head: "Ptolemy Aromatique Candle",
    para: "A sensuous blend of leather, smoke and wood",
  },
  {
    id: 5,
    img: "./Sec6product4.avif",
    head: "Callippus Aromatique Candle",
    para: "A marriage of deep greens and earthy spices",
  },
  {
    id: 6,
    img: "./Sec6product5.avif",
    head: "Bronze Incense Holder ",
    para: "Suited to any interior",
  },
  {
    id: 7,
    img: "./Sec6product6.avif",
    head: "Murasaki Aromatique Incense",
    para: "For those who favour aromas of warm spice",
  },
  {
    id: 8,
    img: "./Sec6product7.avif",
    head: "Kagerou Aromatique Incense",
    para: "For those particularly partial to Vetiver",
  },
];

var settings = {
  dots: true,
  infinite: false,
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

function SectionSix() {
  return (
    <div>
      <div className="SectionSix">
        <Slider {...settings}>
          <div className="sec1">
            <div className="col2">
              <h4>For the home</h4>
              <h1>Domestic pleasures</h1>
              <p>
                Our range of aromatic formulations for the home are practical
                and pleasing in equal measure.
              </p>
              <a href="" className="btn">
                <p>See all Home </p>
                <ArrowForwardIcon />
              </a>
            </div>
          </div>
          {data.map((x) => {
            return (
              <div>
                <div key={x.id} className="product">
                  <img src={x.img} />
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

export default SectionSix;
