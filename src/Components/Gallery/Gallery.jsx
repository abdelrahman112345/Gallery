import React, { useRef, useState } from "react";
import "./gallery.css";
import Img1 from "./imgs/img-1.jpg";
import Img2 from "./imgs/img-2.jpg";
import Img3 from "./imgs/img-3.jpg";
import Img4 from "./imgs/img-4.jpg";
import Img5 from "./imgs/img-5.jpg";
import Img6 from "./imgs/img-6.jpg";
import Img7 from "./imgs/img-7.jpg";
import Img8 from "./imgs/img-8.jpg";
import Img9 from "./imgs/img-9.jpg";
import Img10 from "./imgs/img-10.jpg";
import Img11 from "./imgs/img-11.jpg";
import Img12 from "./imgs/img-12.jpg";
export default function Gallery() {
  const data = [
    { id: 1, img: Img1 },
    { id: 2, img: Img2 },
    { id: 3, img: Img3 },
    { id: 4, img: Img4 },
    { id: 5, img: Img5 },
    { id: 6, img: Img6 },
    { id: 7, img: Img7 },
    { id: 8, img: Img8 },
    { id: 9, img: Img9 },
    { id: 10, img: Img10 },
    { id: 11, img: Img11 },
    { id: 12, img: Img12 },
  ];
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");
  const imgRef = useRef(null);
  const getImg = (item) => {
    console.log(imgRef.current);

    setTempImg(item);
    setModel(true);
  };
  const imgAction = (action) => {
    if (action === "next-img") setTempImg(data[tempImg.id]);
    else if (action === "prev-img") setTempImg(data[tempImg.id - 2]);
  };
  return (
    <>
      <div className={`model ${model ? "open" : ""}`}>
        <i
          className="fa-solid fa-angle-left angle"
          onClick={() => imgAction("prev-img")}
        ></i>
        <img ref={imgRef} src={tempImg.img} alt="" loading="lazy" />
        <i
          className="fa-solid fa-angle-right angle"
          onClick={() => imgAction("next-img")}
        ></i>
        <i className="fa-solid fa-xmark" onClick={() => setModel(false)}></i>
      </div>
      <div className="gallery container">
        <div className="row">
          {data.map((item) => {
            return (
              <div
                className="col-lg-4 picture"
                key={item.id}
                onClick={() => getImg(item)}
              >
                <img src={item.img} alt="" role="button" className="w-100" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
