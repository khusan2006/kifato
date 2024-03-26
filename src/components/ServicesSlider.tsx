import Slider from "react-slick";
import CarouselImage1 from '../assets/carousel-image-1.webp'
import CarouselImage2 from '../assets/carousel-image-2.webp'
import CarouselImage3 from '../assets/carousel-image-3.webp'

function SampleNextArrow(props: {
  className?: string;
  style?: { [prop: string]: string };
  onClick?: () => void;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        right: "2%",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: {
  className?: string;
  style?: { [prop: string]: string };
  onClick?: () => void;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        left: "2%",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
const ServicesSlider = () => {
  return (
    <Slider {...settings} className="mt-20 mb-12">
      <img src={CarouselImage1} alt="guy is fixing the fridge" />
      <img src={CarouselImage2} alt="image of fridge" />
      <img src={CarouselImage3} alt="guy is fixing the fridge" />
    </Slider>
  );
};

export default ServicesSlider;
