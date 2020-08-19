import React, { useState, useRef, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../components/Loader";
import FsImage from "../components/FsImage";
import ImageGallery from "../components/ImageGallery";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

function ProductMainPage({ match }) {
  const [selectedItem, setItem] = useState("0");
  const [tabActive, setTabActive] = useState("1");
  const [img, setImg] = useState(null);
  const [anim, setAnim] = useState(false);
  const [fsIm, toogleFsIm] = useState({
    display: false,
    img: "",
  });
  const scRef = useRef(null);

  function close() {
    toogleFsIm({ display: false, img: "" });
  }

  function toogleFs(img) {
    toogleFsIm({
      display: true,
      img: img,
    });
  }

  function setI(img) {
    setImg(img);
  }

  useEffect(() => {
    setAnim(true);
    setTimeout(() => {
      setAnim(false);
    }, 200);
  }, [img]);

  let { cat_name, p_name } = match.params;

  const { data, status, error, isFetching } = useQuery(
    "currentProduct",
    async (key) => {
      const { data } = await axios.get(`/api/products/${cat_name}/${p_name}`);
      return data;
    }
  );
  const listItems = useQuery("listProps", async (key) => {
    const { data } = await axios.get(`/api/productlist/${p_name}`);
    return data;
  });

  function handleChange(e) {
    setItem(e.target.value);
  }

  useEffect(() => {
    status === "success"
      ? setImg(data.productImage.filter((i) => i.main === true)[0].img)
      : setImg(null);
    // eslint-disable-next-line
  }, [isFetching]);
  // data.productImage.filter((i) => i.main === true)[0].img

  return (
    <>
      {status === "loading" ? (
        <Loader cl="cat-loader-top" />
      ) : status === "error" ? (
        <span>{error.message}</span>
      ) : (
        <section className="product-main-wrapper">
          <Fade triggerOnce>
            <div className="header">
              <h1>{data.productName}</h1>
            </div>
          </Fade>
          <div className="head-wrapper">
            <ImageGallery
              toogleFs={toogleFs}
              anim={anim}
              refer={scRef}
              img={img}
              imageList={data.productImage}
              setImg={setI}
            />

            {listItems.status === "success" && listItems.data.length > 0 ? (
              <div className="select">
                <h4>აირჩიე პროდუქტი</h4>
                <select onChange={handleChange} value={selectedItem}>
                  {listItems.data.map((i, key) => (
                    <option key={key} value={key}>
                      {i.pTitle}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}
          </div>
          <div className="main-info"> {data.Info} </div>

          {listItems.status === "success" && listItems.data.length > 0 ? (
            <div className="tab-container">
              <div className="tab-button-container">
                <button
                  onClick={() => setTabActive("1")}
                  className={tabActive === "1" ? "button-active" : ""}
                >
                  აღწერა
                </button>
                <button
                  onClick={() => setTabActive("2")}
                  className={tabActive === "2" ? "button-active" : ""}
                >
                  მახასიათებლები
                </button>
                <button className="empty" disabled></button>
              </div>
              <div className="panels">
                <div className={tabActive === "1" ? "panel-active" : ""}>
                  <h2>{listItems.data[selectedItem].pTitle}</h2>
                  <p>{listItems.data[selectedItem].pInfo}</p>
                </div>
                <div className={tabActive === "2" ? "panel-active" : ""}>
                  <figure className="table">
                    {parse(listItems.data[selectedItem].properties)}
                  </figure>
                </div>
              </div>
            </div>
          ) : null}

          {fsIm.display ? <FsImage img={fsIm.img} close={close} /> : null}
        </section>
      )}
    </>
  );
}

export default ProductMainPage;
