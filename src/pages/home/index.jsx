import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../assets/kok.svg";
import oq from "../../assets/oq.svg";
import qizil from "../../assets/qizil.svg";
import qora from "../../assets/qora.svg";
import tesla from "../../assets/tesla.jpg";
import tesla2 from "../../assets/tesla2.jpg";
import "./style.css";
import { Header } from "../../layout";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleNavigationClick = (i) => {
    setIndex(i);
  };

  const navItems = [
    { id: 0, label: "Model 1", imgSrc: ExampleCarouselImage, color: "blue" },
    { id: 1, label: "Model 2", imgSrc: qizil, color: "red" },
    { id: 2, label: "Model 3", imgSrc: oq, color: "white" },
    { id: 3, label: "Model 4", imgSrc: qora, color: "slategray" },
    { id:4 , label: "Solar Roof", imgSrc: tesla, color: "gold" },
    { id: 5, label: "Solar Panels", imgSrc: tesla2, color: "chartreuse" },
  ];

  return (
    <div className="carousel-container">
      <Header
        navItems={navItems}
        activeIndex={index}
        onNavigationClick={handleNavigationClick}
      />

      <Carousel activeIndex={index} onSelect={handleSelect}>
        {navItems.map((item) => (
          <Carousel.Item key={item.id}>
            <img className="w-[70%]" src={item.imgSrc} alt={item.label} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
