import React from "react";
import "./aboutinput.scss";
const AboutInputs = (props) => {
  return (
    <div
      className={"about-inputs"}
      style={{ display: props.details ? "none" : "flex" }}
    >
      <label>
        Мы отправим уведомление на почту:
        <input type="email" name="email" id={"email"} />
      </label>

      <label>
        Магазин
        <select name="shops" id="shop">
          <option defaultValue>Магазины</option>
          <option value="alishop">Alishop</option>
          <option value="mediapark">Mediapark</option>
          <option value="karzinka">Karzinka</option>
          <option value="havas">Havas</option>
        </select>
      </label>

      <label>
        Снизиться до
        <div className={"input"}>
          <div className={"sum"}>сум</div>
          <input type="text" />
          <button className="button">Отслеживать</button>
        </div>
      </label>
    </div>
  );
};

export default AboutInputs;
