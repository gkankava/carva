import React from "react";

function ImageGallery({ toogleFs, anim, img, refer, imageList, setImg }) {
  return (
    <div className="images-wrapper">
      <img
        className={`main-image ${anim}`}
        onClick={() => toogleFs(img)}
        src={img}
        alt="img"
      />
      <div className="gal-wrapper" ref={refer}>
        {imageList.map((i, key) => (
          <div
            className={
              i.img === img ? "img-gal-item active-img" : "img-gal-item"
            }
            key={key}
            onClick={() => {
              setImg(i.img);
              let width = key * 100;
              refer.current.scrollTo(width, 0);
            }}
            style={{ backgroundImage: `url(${i.img})` }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
