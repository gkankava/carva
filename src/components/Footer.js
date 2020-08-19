import React, { useState, useRef } from "react";

function Footer() {
  const bottomRef = useRef(null);
  const topRef = useRef(null);

  const [footerActive, setFooterActive] = useState(false);

  const toogleFooter = () => {
    setFooterActive(!footerActive);
    if (!footerActive) {
      setTimeout(() => {
        bottomRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 510);
      let height = topRef.current.scrollHeight;
      topRef.current.style.height = height + "px";
    } else {
      topRef.current.style.height = 0;
    }
  };

  return (
    <footer>
      <div className="whitesp">
        <div
          className={footerActive ? "act-button active" : "act-button"}
          onClick={() => {
            toogleFooter();
          }}
        >
          <i className={footerActive ? "las la-minus" : "las la-plus"}></i>
        </div>
      </div>
      <div className={`${footerActive} top`} ref={topRef}>
        <div className="displ">
          <div className="main-soc-wrap">
            <div className="f-section about">
              <h3>ქარვა ბრუქსი</h3>
              <p>
                ჩვენ გაძლევთ საშუალებას ახალი მეთოდით, მიიღოთ მტკიცებულებები
                დარღვევების შესახებ და შესაბამისად აღმოფხვრათ იგი. ამ მეთოდის
                უპირატესობა მდგომარეობს მის სიიაფეში, “მონტაჟის” სიმარტივეში,
                მონიტორინგისა და მაღალი ეფექტიანობის მიღებაში.
              </p>
            </div>
            <hr />
            <div className="f-section contact">
              <h3>დაგვიკავშირდით</h3>
              <a href="/#">
                <div className="soc-wrap">
                  <i className="lab la-facebook-square"></i>
                  <span>/carvabroox</span>
                </div>
              </a>
              <div className="soc-wrap">
                <i className="las la-mobile"></i>
                <span>(+995) 599 153 577</span>
              </div>
              <div className="soc-wrap">
                <i className="las la-mobile"></i>
                <span>(+995) 599 368 380</span>
              </div>
              <div className="soc-wrap">
                <i className="las la-comment-alt"></i>
                <span>carvabroox@gmail.com</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="f-section map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251.6702580089889!2d44.77751141834034!3d41.74230095750925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447292f5cce979%3A0x789f05a762018569!2sCarva%20Broox!5e0!3m2!1sen!2sge!4v1597331775742!5m2!1sen!2sge"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen={true}
              aria-hidden={false}
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div ref={bottomRef} className="bottom">
        <p>© Copyright 2020 - Carva Broox, tbilisi’, Georgia</p>
        {/* <p>Developed by JJ Prod</p> */}
      </div>
    </footer>
  );
}

export default Footer;
