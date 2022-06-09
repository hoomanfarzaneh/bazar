import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


import  images  from '../../data';
import './gallery.scss';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="appGallery">
      <div className="appGalleryImages">
        <div className="appGalleryImagesContainer" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06].map((image, index) => (
            <div className="appGalleryImagesCard " key={`gallery_image-${index + 1}`}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="appGalleryImagesArrows">
          <FontAwesomeIcon icon={faAngleRight}  className="galleryArrowIcon" onClick={() => scroll('left')} />
          <FontAwesomeIcon icon={faAngleLeft}  className="galleryArrowIcon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;