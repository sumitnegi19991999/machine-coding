import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Carousel = () => {
  const [images, setImages] = useState();
  const [loading, setloading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const [imagePerSlide, setImagePerSlide] = useState(0);

  const imageRef = useRef(null);
  const fetchImage = async (limit) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`
      );
      const data = await response.json();
      setImages(data);
      console.log(data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImage(5);
  }, []);

  const handleNext = () => {
    setImageIndex((preIndex) => {
      preIndex === images.length - 1 ? 0 : preIndex + 1;
    });
  };
  const handlePre = () => {
    setImageIndex((preIndex) => {
      preIndex === 0 ? image.length - 1 : preIndex - 1;
    });
  };

  return loading ? (
    <div>lodingg..</div>
  ) : (
    <div>
      <button>pre</button>
      <div
        style={{
          display: "flex",
          width: imagePerSlide,
          overflow: "hidden",
          transform: `translateX(-${imageIndex * imagePerSlide}px)`,
        }}
      >
        {images &&
          images.map((image) => (
            <img
              onLoad={() => setImagePerSlide(imageRef?.current?.offsetWidth)}
              ref={imageRef}
              style={{ width: "100%" }}
              key={image.id}
              alt={image.title}
              src={image.url}
            />
          ))}
      </div>
      <button>next</button>
    </div>
  );
};

export default Carousel;
