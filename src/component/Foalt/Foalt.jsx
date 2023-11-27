import React from "react";
import Lottie from "lottie-react";
import krathongGreen from "../../asset/lottie/k1.json";
import "./float.css";

const Foalt = ({title}) => {
  return (
    <div className="floatingElement">
        {
            title &&
        <div className="label">
            <div className="card">{title}</div>
        </div>
        }
      <Lottie
        loop={true}
        animationData={krathongGreen}
        style={{
          width: 350,
          height: 350,
        }}
      />
    </div>
  );
};

export default Foalt;
