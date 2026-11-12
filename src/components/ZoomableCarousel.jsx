import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Carousel from "react-bootstrap/Carousel";
import "../css/zoomable-carousel.css";

function ZoomableCarousel({
  items,
  className = "",
  imageClassName = "",
  indicators = false,
}) {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [fullSize, setFullSize] = useState(false);

  function openImage(item) {
    setFullSize(false);
    setZoomedImage(item);
  }

  function closeImage() {
    setZoomedImage(null);
    setFullSize(false);
  }

  useEffect(() => {
    if (!zoomedImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeImage();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomedImage]);

  return (
    <>
      <Carousel
        interval={null}
        indicators={indicators}
        className={`zoomable-carousel ${className}`}
      >
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <button
              type="button"
              className="zoomable-carousel__trigger"
              onClick={() => openImage(item)}
              aria-label={`Ingrandisci: ${item.alt}`}
            >
              <img
                className={imageClassName}
                src={item.src}
                alt={item.alt}
              />
            </button>
          </Carousel.Item>
        ))}
      </Carousel>

      {zoomedImage &&
        createPortal(
          <div
            className="zoom-lightbox"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeImage();
              }
            }}
          >
            <div className="zoom-lightbox__toolbar">
              <button
                type="button"
                onClick={() => setFullSize((value) => !value)}
              >
                {fullSize ? "Adatta" : "Zoom 100%"}
              </button>

              <button
                type="button"
                className="zoom-lightbox__close"
                onClick={closeImage}
                aria-label="Chiudi immagine"
                autoFocus
              >
                ×
              </button>
            </div>

            <div
              className="zoom-lightbox__viewport"
              role="dialog"
              aria-modal="true"
              aria-label="Immagine ingrandita"
            >
              <img
                className={
                  fullSize
                    ? "zoom-lightbox__image zoom-lightbox__image--full"
                    : "zoom-lightbox__image"
                }
                src={zoomedImage.src}
                alt={zoomedImage.alt}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default ZoomableCarousel;