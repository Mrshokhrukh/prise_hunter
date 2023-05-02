import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./check.scss";
import appstore from "../../assets/images/pngegg.png";
import sally from "../../assets/images/Saly-24.png";
import glgplay from "../../assets/images/pngwing.com.png";

const Check = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Container>
      <div className="checkLink" style={{display: width<=820  ? 'none' : 'flex'}}>
        <div className="bottom-right">
          <p> Выгодные предложения всегда рядом </p>
          <span>
            Узнавайте первыми о выгодных предложениях в приложении Price Hunter
          </span>
          <div className="link-img">
           <img src={appstore} alt="" />
           <img src={glgplay} alt="" />
          </div>
        </div>

        <div className="bottom-center"  style={{display: width<=1024  ? 'none' : 'flex'}}>
          <img src={sally} alt="" width={230} height={357}/>
        </div>
        <div className="bottom-left">
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/QR_Code_example.png/600px-QR_Code_example.png"
              alt="QRcode"
              width={164}
              height={164}
            />
          </span>

          <span>Наведи камеру на QR код чтобы скачать приложение</span>
        </div>

      </div>
    </Container>
  );
};

export default Check;
// return (
//
// )
