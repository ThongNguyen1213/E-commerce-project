import React from 'react';
import styles from "./styles.css";
import fashionmodel01 from "../../assets/images/fashionmodel01.jpg";
import fashionmodel02 from "../../assets/images/fashionmodel02.jpg";


const Billboards = () => {
  return (
    <div className="ads">
        <img src={fashionmodel01} alt="fashion-model1" className="ads-image"/>
        <img src={fashionmodel02} alt="fashion-model2" className="ads-image"/>
    </div>
  )
}

export default Billboards