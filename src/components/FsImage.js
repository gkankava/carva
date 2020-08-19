import React from "react";

function FsImage({ img = "", close }) {
  return (
    <div
      className="fs-image"
      onClick={() => {
        close({ display: false, img: "" });
      }}
    >
      <i
        className="las la-times-circle"
        onClick={() => {
          close({ display: false, img: "" });
        }}
      ></i>
      <img src={img} alt="img" />
    </div>
  );
}
export default FsImage;
